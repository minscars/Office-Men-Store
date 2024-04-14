using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.CartItem;
using OfficeMenStore.Application.Models.Common;
using OfficeMenStore.Application.Models.Order;
using OfficeMenStore.Application.Models.OrderDetail;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Enums;
using OfficeMenStore.Domain.Models;
using static OfficeMenStore.Domain.Enums.StatusEnums;

namespace OfficeMenStore.Application.Services
{
    public class OrderService : IOrderService
    {
        private readonly OfficeMenStoreDbContext _context;
        public OrderService(OfficeMenStoreDbContext context)
        {
            _context = context;
        }

        public async Task<ApiResult<int>> CreateOrderAsync(CreateOderRequest dto)
        {
            var itemCarts = await _context.CartItems
                .Where(ic => ic.CartId == dto.CartId && ic.IsDeleted == false)
                .Select(c => new GetAllCartItemResponse()
                {
                    ProductId = c.ProductId,
                    CartId = c.CartId,
                    Quantity = c.Quantity,
                    Subtotal = c.Quantity * c.Product.Price,
                    IsDeleted = c.IsDeleted,
                    SizeId = c.SizeProductId
                }).ToListAsync();

            var addressDelivery = await _context.Addresses
                .Where(a => a.Id == dto.AddressId)
                .Select(a => a.AddressDetail).FirstAsync();

            if (itemCarts.Count == 0)
            {
                return new ApiResult<int>(0)
                {
                    Message = "Not found!",
                    StatusCode = 404
                };
            }

            var total = itemCarts.Sum(c => c.Subtotal);

            var newOrder = new Order()
            {
                UserId = new Guid(dto.UserId),
                Code = SystemConstant.ORDER_PREFIX + $"{DateTime.Now:yyyyMMddHHmmss}",
                OrderTime = DateTime.Now,
                Total = total,
                Status = (int)StatusEnums.Status.Pending,
                PayStatus = dto.Pay,
                AddressDelivery = addressDelivery.ToString(),
            };
            await _context.Orders.AddAsync(newOrder);
            await _context.SaveChangesAsync();
            foreach (var item in itemCarts)
            {
                var newoderDetail = new OrderDetail()
                {
                    OrderId = newOrder.Id,
                    ProductId = item.ProductId,
                    SizeProductId = item.SizeId,
                    Amount = item.Quantity,
                    OrderPrice = item.Subtotal
                };
                await _context.OrderDetails.AddAsync(newoderDetail);
                await _context.SaveChangesAsync();
            }

            var itemInCarts = await _context.CartItems
                    .Where(ic => ic.CartId == dto.CartId && ic.IsDeleted == false)
                    .ToListAsync();
            foreach(var item in itemInCarts)
            {
                item.IsDeleted = true;
            }
            await _context.SaveChangesAsync();

            return new ApiResult<int>(newOrder.Id)
            {
                Message = "Make an order successfully!",
                StatusCode = 200
            };

        }

        public async Task<PaginatedList<List<GetAllOrderResponse>>> GetAllOrderAsync(PaginatedRequest requestDto)
        {
            var total = await _context.Orders.Where(o => o.IsDeleted == false).ToListAsync();
            var orderList = _context.Orders
                .Include(u => u.User)
                .Where(o => o.IsDeleted==false).AsQueryable();

            #region Filtering
            if (!string.IsNullOrEmpty(requestDto.PhoneNumber))
            {
                orderList = orderList.Where(o => o.User.PhoneNumber == requestDto.PhoneNumber);
                total = await _context.Orders.Where(o => o.User.PhoneNumber == requestDto.PhoneNumber).ToListAsync(); 
            }

            if((requestDto.Status != 0) && (requestDto.Status != null))
            {
                orderList = orderList.Where(o => o.Status == (int)requestDto.Status);
                total = await _context.Orders.Where(o => o.Status == (int)requestDto.Status).ToListAsync(); 
            }
            #endregion


            orderList = orderList.OrderByDescending(o => o.OrderTime).Skip((requestDto.Page) * requestDto.Limit).Take(requestDto.Limit);
            var result = await orderList.Select(o => new GetAllOrderResponse()
            {
                OrderId = o.Id,
                Code = o.Code,
                OrderStatus = StatusEnums.GetDisplayName((Status)o.Status),
                Total = o.Total,
                CreatedTime = o.OrderTime,
                CustomerId = o.UserId.ToString(),
                CustomerAvatar = o.User.Avatar,
                CustomerName = o.User.Name,
                Status = StatusEnums.GetDisplayName((Status)o.Status),
            }).ToListAsync();
            if (result.Count < 1)
            {
                return new PaginatedList<List<GetAllOrderResponse>>(null);
            }

            return new PaginatedList<List<GetAllOrderResponse>>(result)
            {
                TotalRecord = total.Count(),
                PageNumber = requestDto.Page,
            };
        }

        public async Task<ApiResult<List<GetAllOrderByUserAccountResponse>>> GetAllOrderByUserAccountAsync(string userId)
        {
            var orderList = await _context.Orders
                .Include(u => u.User)
                .Include(p => p.OrderDetails).ThenInclude( p=> p.Product)
                .Include(o => o.OrderDetails).ThenInclude(o => o.Product.SizeDetails).ThenInclude(s => s.SizeProduct)
                .Where(o => o.IsDeleted == false && o.UserId == new Guid(userId))
                .OrderByDescending(o => o.OrderTime)
                .Select(o => new GetAllOrderByUserAccountResponse()
                {
                    OrderId = o.Id,
                    Code = o.Code,
                    UserId = o.UserId.ToString(),
                    CustomerAvatar = o.User.Avatar,
                    CustomerName = o.User.Name,
                    OrderStatus = StatusEnums.GetDisplayName((Status)o.Status),
                    PayStatus = StatusEnums.GetDisplayName((Status)o.PayStatus),
                    AddressDelivery = o.AddressDelivery,
                    Total = o.Total,
                    OrderTime = o.OrderTime,
                    ListItemOrderDetails = o.OrderDetails.Select(o => new GetAllItemInOrderDetailResponse()
                    {
                        ProductId = o.ProductId,
                        ProductName = o.Product.Name,
                        ProductImage = o.Product.Image,
                        SizeId = o.SizeProductId,
                        SizeName = o.SizeProduct.Name,
                        Price = o.Product.Price,
                        Quantity = o.Amount,
                    }).ToList(),
                }).ToListAsync();
                if (orderList.Count < 1)
                {
                    return new ApiResult<List<GetAllOrderByUserAccountResponse>>(null);
                }

                return new ApiResult<List<GetAllOrderByUserAccountResponse>>(orderList)
                {
                    StatusCode = 200
                };
        }

        public async Task<ApiResult<GetOrderByIdResponse>> GetOrderDetailAsync(int orderId)
        {
            var itemInOrder = await _context.OrderDetails
                .Include(o => o.Order.User)
                .Where(d => d.OrderId == orderId)
                .Select(d => new GetAllItemInOrderDetailResponse()
                {
                    ProductId = d.ProductId,
                    ProductName = d.Product.Name,
                    ProductImage = d.Product.Image,
                    SizeId = d.SizeProductId,
                    SizeName = d.SizeProduct.Name,
                    Price = d.Product.Price,
                    Quantity = d.Amount,
                    Subtotal = d.Amount * d.Product.Price
                }).ToListAsync();
            var orderDetail = await _context.Orders
                .Include(o => o.User)
                .Where(o => o.Id == orderId)
                .Select(o => new GetOrderByIdResponse()
                {
                    OrderId = orderId,
                    Code = o.Code,
                    UserId = o.UserId.ToString(),
                    OrderStatus = StatusEnums.GetDisplayName((Status)o.Status),
                    PayStatus = StatusEnums.GetDisplayName((Status)o.PayStatus),
                    AddressDelivery = o.AddressDelivery,
                    Total = o.Total,
                    OrderTime = o.OrderTime,
                    CustomerName = o.User.Name,
                    CustomerAvatar = o.User.Avatar,
                    CustomerEmail = o.User.Email,
                    CustomerPhone = o.User.PhoneNumber,
                    ApproveTime = o.ApproveTime,
                    RejectedTime = o.RejectedTime,
                    StartDeliveryTime = o.StartDeliveryTime,
                    EndDeliveryTime = o.EndDeliveryTime,
                    ListItemOrderDetails = itemInOrder,
                }).FirstOrDefaultAsync();

            if (orderDetail == null)
            {
                return new ApiResult<GetOrderByIdResponse>(null);
            }

            return new ApiResult<GetOrderByIdResponse>(orderDetail)
            {
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdateOrderStatusAsync(UpdateOrderStatusRequest requestDto)
        {
            var order = await _context.Orders
                .Where(o => o.Id == requestDto.OrderId)
                .FirstOrDefaultAsync();
            if (order == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Not found!",
                    StatusCode = 404
                };
            }

            switch (requestDto.OrderStatus)
            {
                case Status.Approve:
                    order.Status = (int)Status.Approve;
                    order.ApproveTime = DateTime.Now;
                break;

                case Status.Delivering:
                    order.Status = (int)Status.Delivering;
                    order.StartDeliveryTime = DateTime.Now;
                break;

                case Status.Delivered:
                    order.Status = (int)Status.Delivered;
                    order.EndDeliveryTime = DateTime.Now;
                break;
            }

            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }
}

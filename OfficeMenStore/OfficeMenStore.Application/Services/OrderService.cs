using LibraryManagement.Data.Enums;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.CartItem;
using OfficeMenStore.Application.Models.Common;
using OfficeMenStore.Application.Models.Order;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static LibraryManagement.Data.Enums.StatusEnums;

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
                    Quanntity = c.Quanntity,
                    Subtotal = c.Quanntity * c.Product.Price,
                    IsDeleted = c.IsDeleted,
                }).ToListAsync();

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
                OrderTime = DateTime.Now,
                Total = total,
                Status = (int)StatusEnums.Status.Pending,
            };
            await _context.Orders.AddAsync(newOrder);
            await _context.SaveChangesAsync();
            foreach (var item in itemCarts)
            {
                var newoderDetail = new OrderDetail()
                {
                    OrderId = newOrder.Id,
                    ProductId = item.ProductId,
                    Amount = item.Quanntity,
                    OrderPrice = item.Subtotal
                };
                await _context.OrderDetails.AddAsync(newoderDetail);
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
            var orderList = _context.Orders
                .Include(u => u.User)
                .Where(o => o.IsDeleted==false).AsQueryable();
            orderList = orderList.Skip((requestDto.Page) * requestDto.Limit).Take(requestDto.Limit);
            var result = await orderList.Select(o => new GetAllOrderResponse()
            {
                OrderId = o.Id,
                OrderStatus = StatusEnums.GetDisplayName((Status)o.Status),
                Total = o.Total,
                CreatedTime = o.OrderTime,
                CustomerId = o.UserId.ToString(),
                CustomerAvatar = o.User.Avatar,
                CustomerName = o.User.Name,
            }).ToListAsync();
            var total = await _context.Orders.Where(o => o.IsDeleted == false).ToListAsync();
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

    }
}

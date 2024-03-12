using LibraryManagement.Data.Enums;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.CartItem;
using OfficeMenStore.Application.Models.Order;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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


    }
}

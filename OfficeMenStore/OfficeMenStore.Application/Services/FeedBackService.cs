using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.FeedBack;
using OfficeMenStore.Application.Models.Order;
using OfficeMenStore.Application.Models.OrderDetail;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Enums;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static OfficeMenStore.Domain.Enums.StatusEnums;

namespace OfficeMenStore.Application.Services
{
    public class FeedBackService : IFeedBackService
    {
        private readonly OfficeMenStoreDbContext _context;
        public FeedBackService(OfficeMenStoreDbContext context)
        {
            _context = context;
        }

        public async Task<ApiResult<bool>> CreateNewFeedBackAsync(CreateNewFeedBackRequest dto)
        {
            var orderList = await _context.Orders
                .Include(u => u.User)
                .Include(p => p.OrderDetails).ThenInclude(p => p.Product)
                .Include(o => o.OrderDetails).ThenInclude(o => o.Product.SizeDetails).ThenInclude(s => s.SizeProduct)
                .Where(o => o.IsDeleted == false 
                    && o.UserId == new Guid(dto.UserId) 
                    && o.Status == (int)StatusEnums.Status.Delivered)
                .OrderByDescending(o => o.OrderTime)
                .Select(o => new GetAllOrderByUserAccountResponse()
                {
                    ListItemOrderDetails = o.OrderDetails.Select(o => new GetAllItemInOrderDetailResponse()
                    {
                        ProductId = o.ProductId,
                    }).ToList(),
                }).ToListAsync();
            var boughtProduct = 0;
            foreach (var order in orderList)
            {
                foreach(var item in order.ListItemOrderDetails)
                {
                    if(dto.ProductId == item.ProductId)
                    {
                        boughtProduct ++;
                    }
                }
            }
            if (boughtProduct != 0)
            {
                var result = new FeedBack()
                {
                    Content = dto.Content,
                    Rate = dto.Rate,
                    UserId = new Guid(dto.UserId),
                    ProductId = dto.ProductId,
                    CreatedDate = DateTime.Now,
                };
                await _context.FeedBacks.AddAsync(result);
                await _context.SaveChangesAsync();
                return new ApiResult<bool>(true)
                {
                    Message = "Feedback successfully!",
                    StatusCode = 200
                };
            }

            return new ApiResult<bool>(false)
            {
                Message = "You have not bought this product yet!",
                StatusCode = 400
            };
        }

        public async Task<ApiResult<GetFeebBackFollowingProductResponse>> GetFeebBackFollowingProductAsync(int productId)
        {
            var feedBackList = await _context.FeedBacks
                .Include(f => f.User)
                .Where(f => f.ProductId == productId == f.IsDeleted ==false)
                .OrderByDescending(f => f.CreatedDate)
                .Select(f => new GetAllFeedBackItemByProductResponse()
                {
                    FeedBackId = f.Id,
                    Content = f.Content,
                    Rate = f.Rate,
                    ProductId = f.ProductId,
                    UserAvatar = f.User.Avatar,
                    UserName = f.User.Name,
                    UserId = f.UserId.ToString(),
                    CreatedDate = f.CreatedDate
                }).ToListAsync();

            if(feedBackList.Count > 0)
            {
                var rate = Math.Round((decimal)(feedBackList.Sum(f => f.Rate) / feedBackList.Count), 1);
                var result = new GetFeebBackFollowingProductResponse()
                {
                    Rate = rate,
                    Total = feedBackList.Count,
                    FeedBackItems = feedBackList
                };

                return new ApiResult<GetFeebBackFollowingProductResponse>(result)
                {
                    Message = "",
                    StatusCode = 200
                };

            }

            return new ApiResult<GetFeebBackFollowingProductResponse>(null)
            {
                Message = "Some thing went wrong!",
                StatusCode = 400
            };
        }
    }
}

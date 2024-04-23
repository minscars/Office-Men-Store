using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Promotion;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Application.Services
{
    public class PromotionService : IPromotionService
    {
        private readonly OfficeMenStoreDbContext _context;

        public PromotionService(OfficeMenStoreDbContext context)
        {
            _context = context;
        }

        public async Task<ApiResult<bool>> CreatePromotionAsync(CreatePromotionRequest request)
        {
            var newPromotion = new Promotion()
            {
                Id = Guid.NewGuid().ToString(),
                Code = request.Code,
                Description = request.Description,
                StartDate = request.StartDate,
                EndDate = request.EndDate,
                LeastValueCondition = request.LeastValueCondition,
                DiscountPercent = request.DiscountPercent,
                MaxDiscount = request.MaxDiscount,
                Discount = request.Discount,
                PromotionTypeId = request.PromotionTypeId,
                IsDeleted = false,
                CreatedTime = DateTime.Now,
                UpdatedTime = DateTime.Now,
            };

            await _context.Promotions.AddAsync(newPromotion);
            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "Create new promotion successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdatePromotionAsync(UpdatePromotionRequest request)
        {
            var promotion = await _context.Promotions.Where(p => p.Id == request.Id).FirstOrDefaultAsync();

            promotion.Code = request.Code;
            promotion.Description = request.Description;
            promotion.StartDate = request.StartDate;
            promotion.EndDate = request.EndDate;
            promotion.LeastValueCondition = request.LeastValueCondition;
            promotion.DiscountPercent = request.DiscountPercent;
            promotion.MaxDiscount = request.MaxDiscount;
            promotion.Discount = request.Discount;
            promotion.PromotionTypeId = request.PromotionTypeId;
            promotion.UpdatedTime = DateTime.Now;

            await _context.SaveChangesAsync();  

            return new ApiResult<bool>(true)
            {
                Message = "Update promotion successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> DeletePromotionAsync(string promotionId)
        {
            var promotion = await _context.Promotions.Where(p => p.Id == promotionId).FirstOrDefaultAsync();

            promotion.IsDeleted = true;
            promotion.UpdatedTime = DateTime.Now;

            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "Delete promotion successfully!",
                StatusCode = 200
            };
        }
    }
}

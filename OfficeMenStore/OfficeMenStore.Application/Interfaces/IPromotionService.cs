using OfficeMenStore.Application.Models.Promotion;
using OfficeMenStore.Application.Utilities.Constants;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IPromotionService
    {
        Task<ApiResult<bool>> CreatePromotionAsync(CreatePromotionRequest request);
        Task<ApiResult<bool>> UpdatePromotionAsync(UpdatePromotionRequest request);
        Task<ApiResult<bool>> DeletePromotionAsync(string promotionId);
    }
}

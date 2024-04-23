using OfficeMenStore.Application.Models.Common;
using OfficeMenStore.Application.Models.Order;
using OfficeMenStore.Application.Utilities.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IOrderService
    {
        Task<ApiResult<int>> CreateOrderAsync(CreateOderRequest dto);
        Task<PaginatedList<List<GetAllOrderResponse>>> GetAllOrderAsync(PaginatedRequest requestDto);
        Task<ApiResult<List<GetAllOrderByUserAccountResponse>>> GetAllOrderByUserAccountAsync(string userId);
        Task<ApiResult<GetOrderByIdResponse>> GetOrderDetailAsync(int  orderId);
        Task<ApiResult<bool>> UpdateOrderStatusAsync(UpdateOrderStatusRequest requestDto);
        Task<ApiResult<List<GetAllPromotionResponse>>> GetAllPromotionAsync();
        Task<ApiResult<List<GetAllPromotionResponse>>> GetAllPromotionByConditionAsync(string promotionTypeId, decimal orderValue);
        Task<ApiResult<GetAllPromotionResponse>> GetDetailPromotion(string promotionId);
    }
}

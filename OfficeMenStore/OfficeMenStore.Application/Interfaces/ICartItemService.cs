using OfficeMenStore.Application.Models.Cart;
using OfficeMenStore.Application.Models.CartItem;
using OfficeMenStore.Application.Utilities.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface ICartItemService
    {
        Task<ApiResult<bool>> CreateCartItemAsync(CreateCartItemRequest dto);
        Task<ApiResult<bool>> UpdateQuantityAsync(UpdateQuantityCartItemRequest dto);
        Task<ApiResult<GetCartByUserResponse>> GetAllCartItemAsync(string userId);
        Task<ApiResult<bool>> DeleteCartItemAsync(DeletedCartItemsRequest dto);
    }
}

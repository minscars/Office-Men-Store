using OfficeMenStore.Application.Models.Cart;
using OfficeMenStore.Application.Utilities.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface ICartService
    {
        Task<ApiResult<GetCartByUserResponse>> GetCartByUserAsync(string userId);
    }
}

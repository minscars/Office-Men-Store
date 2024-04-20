using OfficeMenStore.Application.Models.Size;
using OfficeMenStore.Application.Utilities.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface ISizeProductService
    {
        Task<ApiResult<GetAmountProductSizeRespnse>> GetAmountProductSizeAsync(GetAmountProductSizeRequest dto);
    }
}

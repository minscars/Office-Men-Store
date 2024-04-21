using OfficeMenStore.Application.Models.Address;
using OfficeMenStore.Application.Utilities.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IAddressService
    {
        Task<ApiResult<bool>> CreateAddressAsync(CreateAddressRequest dto);

    }
}

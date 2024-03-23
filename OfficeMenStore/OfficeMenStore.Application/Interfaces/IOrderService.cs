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

    }
}

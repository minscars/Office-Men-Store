using OfficeMenStore.Application.Models.Statistic;
using OfficeMenStore.Application.Utilities.Constants;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IStatisticService
    {
        Task<ApiResult<GetStatisticResponse>> GetStatisticDetailAsync();
    }
}

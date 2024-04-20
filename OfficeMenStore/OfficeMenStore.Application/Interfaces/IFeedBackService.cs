using OfficeMenStore.Application.Models.FeedBack;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IFeedBackService
    {
        Task<ApiResult<bool>> CreateNewFeedBackAsync(CreateNewFeedBackRequest dto);
        Task<ApiResult<GetFeebBackFollowingProductResponse>> GetFeebBackFollowingProductAsync(int productId);
    }
}

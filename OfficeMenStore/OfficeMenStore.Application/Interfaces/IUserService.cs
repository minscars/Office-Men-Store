using OfficeMenStore.Application.Models.User;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IUserService
    {
        Task<ApiResult<string>> LoginAsync(LoginRequest request);
        Task<ApiResult<GetUserInformationResponse>> GetUserByIdAsync(Guid id);
        Task<PaginatedList<List<GetUserInformationResponse>>> GetAllUserAsync(GetAllUserRequest reuqestDto);
    }
}

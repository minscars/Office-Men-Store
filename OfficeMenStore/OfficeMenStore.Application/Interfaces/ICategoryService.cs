using OfficeMenStore.Application.Models.Category;
using OfficeMenStore.Application.Utilities.Constants;

namespace OfficeMenStore.Application.Interfaces
{
    public interface ICategoryService
    {
        Task<ApiResult<List<GetAllCategoryResponse>>> GetAllCategoryAsync();
    }
}

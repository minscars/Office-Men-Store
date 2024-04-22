using OfficeMenStore.Application.Models.Category;
using OfficeMenStore.Application.Utilities.Constants;

namespace OfficeMenStore.Application.Interfaces
{
    public interface ICategoryService
    {
        Task<ApiResult<List<GetAllCategoryResponse>>> GetAllCategoryAsync();
        Task<ApiResult<GetDetailCategoryResponse>> GetDetailCategoryAsync(int cateId);
        Task<ApiResult<bool>> CreateCategoryAsync(CreateCategoryRequest request);
        Task<ApiResult<bool>> UpdateCategoryAsync(UpdateCategoryRequest request);
    }
}

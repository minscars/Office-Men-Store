using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Application.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IProductService
    {
        public Task<ApiResult<List<GetProductListResponseModel>>> GetAllAsync();
        public Task<ApiResult<GetProductResponseModel>> GetProductByIdAsync(int id);
        public Task<ApiResult<List<GetProductListResponseModel>>> GetProductByCategoryIdAsync(int categoryId);
        public Task<ApiResult<List<GetProductListResponseModel>>> SearchProductByKeyAsync(string key);
        //public Task<ApiResult<bool>> CreateProductAsync(CreateProductRequest request);
    }
}

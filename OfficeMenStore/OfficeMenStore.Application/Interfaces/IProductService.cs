using OfficeMenStore.Application.Utilities.Constants;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Application.Models.Pagination;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IProductService
    {
        public Task<PaginatedList<List<GetProductListResponseModel>>> GetAllAsync(GetPaginationRequest dto);
        public Task<ApiResult<GetProductResponseModel>> GetProductByIdAsync(int id);
        public Task<PaginatedList<List<GetProductListResponseModel>>> GetProductByCategoryIdAsync(int page, int limit, int cateId);
        public Task<PaginatedList<List<GetProductListResponseModel>>> SearchProductByKeyAsync(int page, int limit, string key);
        public Task<ApiResult<bool>> CreateProductAsync(CreateProductRequest request);
        public Task<ApiResult<bool>> UpdateProductAsync(UpdateProductRequest request);
        public Task<ApiResult<bool>> DeleteProductAsync(int productId);
    }
}

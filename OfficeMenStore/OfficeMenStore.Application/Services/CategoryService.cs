using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Category;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;

namespace OfficeMenStore.Application.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly OfficeMenStoreDbContext _context;
        private readonly IMapper _mapper;
        public CategoryService(OfficeMenStoreDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<ApiResult<List<GetAllCategoryResponse>>> GetAllCategoryAsync()
        {
            var cateList = await _context.Categories
                .Where(c => c.IsDeleted == false)
                .Select(c => _mapper.Map<GetAllCategoryResponse>(c))
                .ToListAsync();
            if (cateList.Count < 1)
            {
                return new ApiResult<List<GetAllCategoryResponse>>(null)
                {
                    Message = "Not found!",
                    StatusCode = 404
                };
            }

            return new ApiResult<List<GetAllCategoryResponse>>(cateList)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }
}

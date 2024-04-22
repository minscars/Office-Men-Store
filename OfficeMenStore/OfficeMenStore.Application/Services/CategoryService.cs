using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Category;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Application.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly OfficeMenStoreDbContext _context;
        private readonly IMapper _mapper;
        private readonly IFileService _fileServivce;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public CategoryService(OfficeMenStoreDbContext context, IMapper mapper, IFileService fileService, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _mapper = mapper;
            _fileServivce = fileService;
            _webHostEnvironment = webHostEnvironment;
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

        public async Task<ApiResult<GetDetailCategoryResponse>> GetDetailCategoryAsync(int cateId)
        {
            var cate = await _context.Categories
                .Where (c => c.IsDeleted == false && c.Id == cateId)
                .Select(c => new GetDetailCategoryResponse()
                {
                   Id = c.Id,
                   CategoryName = c.Name,
                   Image = c.Image,
                   CreatedTime = c.CreatedTime
                })
                .FirstOrDefaultAsync();
            return new ApiResult<GetDetailCategoryResponse>(cate)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> CreateCategoryAsync(CreateCategoryRequest request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var imageName = await _fileServivce.UploadFileAsync(request.Image, SystemConstant.IMG_CATEGORIES_FOLDER);
            var cate = new Category()
            {
                Name = request.Name,
                Image = imageName,
                CreatedTime = DateTime.Now,
            };
            await _context.Categories.AddAsync(cate);
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = "Create new category successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdateCategoryAsync(UpdateCategoryRequest request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var cate = await _context.Categories
                .Where(p => p.Id == request.Id)
                .FirstOrDefaultAsync();
            if (cate == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = $"Couldn't find the category with id: {request.Id}",
                    StatusCode = 404
                };
            }

            if (request.Image == null)
            {
                cate.Image = cate.Image;
            }
            else
            {
                string path = Path.Combine(_webHostEnvironment.WebRootPath, SystemConstant.IMG_CATEGORIES_FOLDER, cate.Image);
                await _fileServivce.RemoveFileAsync(path);
                var imageName = await _fileServivce.UploadFileAsync(request.Image, SystemConstant.IMG_CATEGORIES_FOLDER);
                cate.Image = imageName;
            }

            cate.Name = request.Name;
            cate.UpdatedTime = DateTime.Now;

            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = "Update category successfully!",
                StatusCode = 200
            };
        }
    }
}

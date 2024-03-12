using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Application.Models.Size;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly OfficeMenStoreDbContext _context;
        private readonly IMapper _mapper;
        public ProductService(OfficeMenStoreDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ApiResult<List<GetProductListResponseModel>>> GetAllAsync()
        {
            var productList = await _context.Products
                .Where(p => p.IsDeleted == false)
                .Select(p => _mapper.Map<GetProductListResponseModel>(p))
                .ToListAsync();
            if(productList.Count < 1)
            {
                return new ApiResult<List<GetProductListResponseModel>>(null)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            return new ApiResult<List<GetProductListResponseModel>>(productList)
            {
                Message = "",
                StatusCode = 200
            };

        }

        public async Task<ApiResult<GetProductResponseModel>> GetProductByIdAsync(int id)
        {
            var checkExit = await _context.Products
                .Include(p => p.Category)
                .Where(p => p.Id == id && p.IsDeleted == false)
                .Select(p => new GetProductResponseModel()
                {
                    Id = p.Id,
                    CategoryName = p.Category.Name,
                    Name = p.Name,
                    Image = p.Image,
                    Price = p.Price,
                    IsDeleted = false,
                    SizeProducts = p.SizeDetails.Select(s => new GetAllSizeByProductResponse()
                    {
                        Id = s.SizeProductId,
                        Name = s.SizeProduct.Name,
                        Amount = s.Quantity
                        
                    }).ToList(),
                    CreatedTime = p.CreatedTime,
                })
                .FirstOrDefaultAsync();
            if(checkExit == null)
            {
                return new ApiResult<GetProductResponseModel>(null)
                {
                    Message = $"Couldn't find the room with id: {id}",
                    StatusCode = 404
                };
            }

            return new ApiResult<GetProductResponseModel>(_mapper.Map<GetProductResponseModel>(checkExit))
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<GetProductListResponseModel>>> GetProductByCategoryIdAsync(int categoryId)
        {
            var productList = await _context.Products
                .Include(p => p.Category)
                .Where(p => p.IsDeleted == false && p.CategoryId ==categoryId)
                .Select(p => _mapper.Map<GetProductListResponseModel>(p))
                .ToListAsync();
            if (productList.Count < 1)
            {
                return new ApiResult<List<GetProductListResponseModel>>(null)
                {
                    Message = "Not found!",
                    StatusCode = 404
                };
            }

            return new ApiResult<List<GetProductListResponseModel>>(productList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<GetProductListResponseModel>>> SearchProductByKeyAsync(string key)
        {
            var productList = await _context.Products
            .Include(p => p.Category)
            .Where(p => p.Name.Trim().ToLower().Contains(key.ToLower()) &&  p.IsDeleted == false )
            .Select(p => _mapper.Map<GetProductListResponseModel>(p))
            .ToListAsync();
            if (productList.Count < 1)
            {
                return new ApiResult<List<GetProductListResponseModel>>(null)
                {
                    Message = "Not found!",
                    StatusCode = 404
                };
            }

            return new ApiResult<List<GetProductListResponseModel>>(productList)
            {
                Message = "",
                StatusCode = 200
            };
        }

        //public async Task<ApiResult<bool>> CreateProductAsync(CreateProductRequest request)
        //{
        //    if (request == null)
        //    {
        //        return new ApiResult<bool>(false)
        //        {
        //            Message = "Something went wrong!",
        //            StatusCode = 400
        //        };
        //    }
        //}

    }
}


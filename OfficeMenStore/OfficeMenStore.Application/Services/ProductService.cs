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

        public async Task<PaginatedList<List<GetProductListResponseModel>>> GetAllAsync(int page, int limit)
        {
            var productList = _context.Products
                .Include(p => p.Category)
                .Where(p => p.IsDeleted == false)
                .AsQueryable();

            var total = await _context.Products.Where(p => p.IsDeleted == false).ToListAsync();
            productList = productList.Skip((page) * limit).Take(limit);
            var result = await productList.Select(p => _mapper.Map<GetProductListResponseModel>(p)).ToListAsync();
            
            if (result.Count < 1)
            {
                return new PaginatedList<List<GetProductListResponseModel>>(null);
            }

            return new PaginatedList<List<GetProductListResponseModel>>(result)
            {
                TotalRecord = total.Count(),
                PageNumber = page,
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

        public async Task<PaginatedList<List<GetProductListResponseModel>>> GetProductByCategoryIdAsync(int page, int limit, int cateId)
        {
            var productList = _context.Products
                .Include(p => p.Category)
                .Where(p => p.IsDeleted == false && p.CategoryId == cateId)
                .AsQueryable();

            productList = productList.Skip((page) * limit).Take(limit);
            var result = await productList.Select(p => _mapper.Map<GetProductListResponseModel>(p)).ToListAsync();
            var total = await _context.Products.Where(b => b.CategoryId == cateId && b.IsDeleted == false).ToListAsync();
            if (result.Count < 1)
            {
                return new PaginatedList<List<GetProductListResponseModel>>(null);
            }

            return new PaginatedList<List<GetProductListResponseModel>>(result)
            {
                TotalRecord = total.Count(),
                PageNumber = page,
            };
        }

        public async Task<PaginatedList<List<GetProductListResponseModel>>> SearchProductByKeyAsync(int page, int limit, string key)
        {
            var productList = _context.Products
                .Include(p => p.Category)
                .Where(p => p.Name.Trim().ToLower().Contains(key.ToLower()) && p.IsDeleted == false)
                .AsQueryable();
            productList = productList.Skip((page) * limit).Take(limit);
            var result = await productList.Select(p => _mapper.Map<GetProductListResponseModel>(p)).ToListAsync();
            var total = await _context.Products.Where(p => p.Name.Trim().ToLower().Contains(key.ToLower()) && p.IsDeleted == false).ToListAsync();


            if (result.Count < 1)
            {
                return new PaginatedList<List<GetProductListResponseModel>>(null);
            }

            return new PaginatedList<List<GetProductListResponseModel>>(result)
            {
                TotalRecord= total.Count(),
                PageNumber = page,
            };
        }

    }
}


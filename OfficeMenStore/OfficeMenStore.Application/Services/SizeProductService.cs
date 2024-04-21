using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Size;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Services
{
    public class SizeProductService : ISizeProductService
    {
        private readonly OfficeMenStoreDbContext _context;
        public SizeProductService(OfficeMenStoreDbContext context)
        {
            _context = context;
        }


        public async Task<ApiResult<GetAmountProductSizeRespnse>> GetAmountProductSizeAsync(GetAmountProductSizeRequest dto)
        {
            var result = await _context.SizeDetails
                .Where(s => s.ProductId == dto.ProductId && s.SizeProductId == dto.SizeId)
                .Select(s => new GetAmountProductSizeRespnse()
                {
                    SizeId = s.SizeProductId,
                    ProductId = s.ProductId,
                    Name = s.SizeProduct.Name,
                    Amount = s.Quantity
                }).FirstOrDefaultAsync();
            return new ApiResult<GetAmountProductSizeRespnse>(result)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<List<GetAllSizeByProductResponse>>> GetAllSizeByProductAsync(int productId)
        {
            var result = await _context.SizeDetails
                .Where(s => s.ProductId == productId)
                .Select(s => new GetAllSizeByProductResponse()
                {
                    Id = s.SizeProductId,
                    Name = s.SizeProduct.Name,
                    Amount = s.Quantity
                }).ToListAsync();
            return new ApiResult<List<GetAllSizeByProductResponse>>(result)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdateQuantitySizeProductAsync(UpdateQuantitySizeProductRequest dto)
        {
            if(dto != null)
            {
                var sizeProduct = await _context.SizeDetails
                    .Where(s => s.SizeProductId == dto.SizeProductId && s.ProductId == dto.ProductId)
                    .FirstOrDefaultAsync();
                sizeProduct.Quantity = dto.Quantity;
                await _context.SaveChangesAsync();
                return new ApiResult<bool>(true)
                {
                    StatusCode = 200,
                    Message = "Update quantity successfully!"

                };
            }
            return new ApiResult<bool>(false)
            {
                StatusCode = 400,
                Message = "Something went wrong!"
            };
        }
    }
}

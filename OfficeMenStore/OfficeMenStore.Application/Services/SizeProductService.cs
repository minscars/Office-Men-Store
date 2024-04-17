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
    }
}

using AutoMapper;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
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
    }
}

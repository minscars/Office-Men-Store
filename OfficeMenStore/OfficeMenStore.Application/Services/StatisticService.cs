﻿using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Application.Models.Size;
using OfficeMenStore.Application.Models.Statistic;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using static OfficeMenStore.Domain.Enums.StatusEnums;

namespace OfficeMenStore.Application.Services
{
    public class StatisticService : IStatisticService
    {
        private readonly OfficeMenStoreDbContext _context;
        public StatisticService(OfficeMenStoreDbContext context)
        {
            _context = context;
        }

        public async Task<ApiResult<GetStatisticResponse>> GetStatisticDetailAsync()
        {

            var productList = await _context.Products
                .Include(p => p.Category)
                .Where(p => p.IsDeleted == false)
                .Select(p => new GetProductListResponseModel()
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
                }).ToListAsync();

            for (int i = 0; i < productList.Count; i++)
            {
                productList[i].TotalProduct = productList[i].SizeProducts.Sum(s => s.Amount);
            }


            var result = new GetStatisticResponse();

            result.CustomerAccount = _context.Users.Count();
            result.TotalOrder = _context.Orders.Where(o => o.IsDeleted != true).Count();
            result.TotalItem = productList.Sum(p => p.TotalProduct);

            //Revenue by month
            var currentDate = DateTime.Now;
            result.RevenueResponse = new List<RevenueResponse>();
            for (int i = 5; i>=0; i--)
            {
                DateTime date = currentDate.AddMonths(-i);
                decimal revenue = await GetRevenueByMonthAsync(date.Month, date.Year);
                result.RevenueResponse.Add(new RevenueResponse
                {
                    MonthYear = date.ToString("MMM yyyy"),
                    Revenue = revenue 
                });
            }

            return new ApiResult<GetStatisticResponse>(result)
            {
                StatusCode = 200
            };
        }

        private async Task<decimal> GetRevenueByMonthAsync(int month, int year)
        {
            return await _context.Orders.Where(o => o.EndDeliveryTime.Month == month && o.EndDeliveryTime.Year == year && o.Status == (int)Status.Delivered).SumAsync(o => o.Total);
        }
    }
}

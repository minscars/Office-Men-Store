using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class SizeDetailExtention
    {
        public static void FillDataSizeDetail(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SizeDetail>().HasData(
                new SizeDetail()
                {
                    SizeProductId = 1,
                    ProductId = 1,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 2,
                    ProductId = 1,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 3,
                    ProductId = 1,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 4,
                    ProductId = 1,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 1,
                    ProductId = 2,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 2,
                    ProductId = 2,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 3,
                    ProductId = 2,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 4,
                    ProductId = 2,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 1,
                    ProductId = 3,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 2,
                    ProductId = 3,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 3,
                    ProductId = 3,
                    Quantity = 10
},
                new SizeDetail()
                {
                    SizeProductId = 4,
                    ProductId = 3,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 1,
                    ProductId = 4,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 2,
                    ProductId = 4,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 3,
                    ProductId = 4,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 4,
                    ProductId = 4,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 1,
                    ProductId = 5,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 2,
                    ProductId = 5,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 3,
                    ProductId = 5,
                    Quantity = 10
                },
                new SizeDetail()
                {
                    SizeProductId = 4,
                    ProductId = 5,
                    Quantity = 10
                }
            );
        }
    }
}

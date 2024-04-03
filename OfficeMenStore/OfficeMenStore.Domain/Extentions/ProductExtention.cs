using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class ProductExtention
    {
        public static void FillDataProduct(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product()
                {
                    Id = 1,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "1.png",
                    CategoryId = 1,
                    Price = 489000,
                    Rating = 4,
                },
                new Product()
                {
                    Id = 2,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "2.png",
                    CategoryId = 1,
                    Price = 489000,
                    Rating = 3,
                },
                new Product()
                {
                    Id = 3,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "3.png",
                    CategoryId = 1,
                    Price = 489000,
                    Rating = 5,

                },
                new Product()
                {
                    Id = 4,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "4.png",
                    CategoryId = 1,
                    Price = 489000,
                    Rating = 3.5
                },
                new Product()
                {
                    Id = 5,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "5.png",
                    CategoryId = 1,
                    Price = 489000,
                    Rating = 3.5
                });
        }
    }
}

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
                    Price = 10,
                },
                new Product()
                {
                    Id = 2,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "2.png",
                    CategoryId = 1,
                    Price = 10,
                },
                new Product()
                {
                    Id = 3,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "3.png",
                    CategoryId = 1,
                    Price = 10,
                },
                new Product()
                {
                    Id = 4,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "4.png",
                    CategoryId = 1,
                    Price = 10,
                },
                new Product()
                {
                    Id = 5,
                    Name = "Áo sơ mi vải Jersey ngắn tay",
                    Image = "5.png",
                    CategoryId = 1,
                    Price = 10,
                },
                new Product()
                {
                    Id = 6,
                    Name = "Miracle Air quần dài",
                    Image = "6.png",
                    CategoryId = 2,
                    Price = 14,
                },
                new Product()
                {
                    Id = 7,
                    Name = "Miracle Air quần dài",
                    Image = "7.png",
                    CategoryId = 2,
                    Price = 14,
                },
                new Product()
                {
                    Id = 8,
                    Name = "Miracle Air quần dài",
                    Image = "8.png",
                    CategoryId = 2,
                    Price = 14,
                },
                new Product()
                {
                    Id = 9,
                    Name = "Miracle Air quần dài",
                    Image = "9.png",
                    CategoryId = 2,
                    Price = 14,
                },
                new Product()
                {
                    Id = 10,
                    Name = "Miracle Air quần dài",
                    Image = "10.png",
                    CategoryId = 2,
                    Price = 14,
                },
                new Product()
                {
                    Id = 11,
                    Name = "Thắt lưng da Ý",
                    Image = "11.png",
                    CategoryId = 3,
                    Price = 6,
                },
                new Product()
                {
                    Id = 12,
                    Name = "Thắt lưng da Ý",
                    Image = "12.png",
                    CategoryId = 3,
                    Price = 7,
                },
                new Product()
                {
                    Id = 13,
                    Name = "Thắt lưng da Ý",
                    Image = "13.png",
                    CategoryId = 3,
                    Price = 4,
                },
                new Product()
                {
                    Id = 14,
                    Name = "Thắt lưng da Ý",
                    Image = "14.png",
                    CategoryId = 3,
                    Price = 7,
                },
                new Product()
                {
                    Id = 15,
                    Name = "Thắt lưng da Ý",
                    Image = "15.png",
                    CategoryId = 3,
                    Price = 3,
                }





                );
        }
    }
}

using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class CategoryExtention
    {
        public static void FillDataCategory(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category()
                {
                    Id = 1,
                    Name = "Áo sơ mi",
                    Image = "1.png"

                },
                new Category()
                {
                    Id = 2,
                    Name = "Áo sơ mi",
                    Image = "2.png"

                },
                new Category()
                {
                    Id =3,
                    Name = "Phụ kiện",
                    Image = "3.png"
                }
                );
        }
    }
}

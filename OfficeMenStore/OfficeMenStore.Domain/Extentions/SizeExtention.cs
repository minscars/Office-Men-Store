using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class SizeExtention
    {
        public static void FillDataSize(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SizeProduct>().HasData(
                new SizeProduct()
                {
                    Id = 1,
                    Name ="M"
                },
                new SizeProduct()
                {
                    Id = 2,
                    Name = "L",
                },
                new SizeProduct()
                {
                    Id = 3,
                    Name = "XL",
                },
                new SizeProduct()
                {
                    Id = 4,
                    Name = "XXL"
                }
                );
        }
    }
}

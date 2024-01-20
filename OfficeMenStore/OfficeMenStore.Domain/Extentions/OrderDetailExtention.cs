using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class OrderDetailExtention
    {
        public static void FillDataOrderDetail(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderDetail>().HasData(
            new OrderDetail()
            {
                OrderId = 1,
                ProductId = 1,
                Amount = 2,
                OrderPrice = 20
            }
            );
        }
    }
}

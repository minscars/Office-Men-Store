﻿using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class OrderExtention
    {
        public static void FillDataOrder(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>().HasData(
            new Order()
            {
                Id = 1,
                UserId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4"),
                Status = 1,
                OrderTime = DateTime.Now,
            }
            
            );
        }
    }
}

﻿using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class CartExtention
    {
        public static void FillDataCart(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cart>().HasData(
            new Cart()
            {
                Id = 1,
                UserId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4"),
            }   
            );
        }
    }
}

using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class CartItemExtention
    {
        public static void FillDataCartItem(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CartItem>().HasData(
                new CartItem()
                {
                    CartId = 1,
                    ProductId = 1,
                    SizeProductId = 1,
                    Quanntity = 1,
                }
                );
        }
    }
}

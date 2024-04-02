using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Extentions
{
    public static class AddressExtention
    {
        public static void FillDataAdress(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>().HasData(
                new Address()
                {
                    Id = 1,
                    AddressDetail = "Ký túc xá A, Trường Đại học Cần Thơ, đường 3/2, phường Xuân Khánh, quận Ninh Kiều, TP.Cần Thơ",
                    UserId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4")
                },
                new Address()
                {         
                    Id = 2,
                    AddressDetail = "87 Lê Văn Huân, phường 13, quận Tân Bình, TP. Hồ Chí Minh",
                    UserId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4")               
                }
                ) ;
        }
    }
}

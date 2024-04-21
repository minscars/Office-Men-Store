using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Extentions
{
    public static class PromotionExtention
    {
        public static void FillDataPromotion(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Promotion>().HasData(
                new Promotion()
                {
                    Id = "3d6d99a1-260c-40fa-9592-9db55cdc6e9a",
                    Code = "FREESHIP",
                    DiscountPercent = 100,
                    Description = "Free ship for order value at least 500.000 VND",
                    LeastValueCondition = 500000,
                    StartDate = new DateTime(2024, 4, 1),
                    EndDate = new DateTime(2024, 4, 30),
                    CreatedTime = DateTime.Now,
                    UpdatedTime = DateTime.Now,
                    IsDeleted = false,
                    PromotionTypeId = "c5f71742-8892-40ac-a81f-f7c413bdc6e2"
                },
                new Promotion()
                {
                    Id = "04e10389-fbed-4edf-95bf-addcd187a4e6",
                    Code = "ENJOYMATCH",
                    Discount = 100000,
                    Description = "Voucher 100.000 VND for order value at least 1.000.000 VND",
                    LeastValueCondition = 1000000,
                    StartDate = new DateTime(2024, 4, 1),
                    EndDate = new DateTime(2024, 4, 30),
                    CreatedTime = DateTime.Now,
                    UpdatedTime = DateTime.Now,
                    IsDeleted = false,
                    PromotionTypeId = "6052d868-af98-4327-91e2-080bf9b1c192"
                }
            );
        }
    }
}

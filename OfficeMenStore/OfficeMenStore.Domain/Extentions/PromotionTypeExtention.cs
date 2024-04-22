using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Extentions
{
    public static class PromotionTypeExtention
    {
        public static void FillDataPromotionType(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PromotionType>().HasData(
                new PromotionType()
                {
                    Id = "c5f71742-8892-40ac-a81f-f7c413bdc6e2",
                    Name = "Shipping fee discount",
                    CreatedTime = DateTime.UtcNow,
                    UpdatedTime = DateTime.UtcNow,
                    IsDeleted = false,
                },
                new PromotionType()
                {
                    Id = "6052d868-af98-4327-91e2-080bf9b1c192",
                    Name = "Shop voucher",
                    CreatedTime = DateTime.UtcNow,
                    UpdatedTime = DateTime.UtcNow,
                    IsDeleted = false,
                }
            );
        }
    }
}

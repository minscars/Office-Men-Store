using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Extentions
{
    public static class PromotionDetailExtention
    {
        public static void FillDataPromotionDetail(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PromotionDetail>().HasData(
                new PromotionDetail()
                {
                    PromotionId = "3d6d99a1-260c-40fa-9592-9db55cdc6e9a",
                    OrderId = 1,
                    Discount = 30000,
                    AppliedTime = DateTime.UtcNow,
                }
            );
        }
    }
}

using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Extentions
{
    public static class FeedBackExtention
    {
        public static void FillDataFeedBack(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<FeedBack>().HasData(
                new FeedBack()
                {
                    Id = 1,
                    UserId = new Guid("8A820ADB-93D7-4C6F-9404-BDBFC14419F4"),
                    ProductId = 1,
                    Content = "Test",
                    Rate = 5,
                    CreatedDate = DateTime.Now,
                }
                );

        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Configurations
{
    public class PromotionDetailConfig : IEntityTypeConfiguration<PromotionDetail>
    {
        public void Configure(EntityTypeBuilder<PromotionDetail> builder)
        {
            builder.HasKey(c => new { c.OrderId, c.PromotionId });
            builder.Property(x => x.OrderId).IsRequired();
            builder.Property(x => x.PromotionId).IsRequired();
            builder.Property(x => x.AppliedTime).IsRequired().HasDefaultValue(DateTime.Now);
            builder.Property(x => x.Discount).IsRequired();
        }
    }
}

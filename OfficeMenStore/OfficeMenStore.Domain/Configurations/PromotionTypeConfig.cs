using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Configurations
{
    public class PromotionTypeConfig : IEntityTypeConfiguration<PromotionType>
    {
        public void Configure(EntityTypeBuilder<PromotionType> builder)
        {
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.CreatedTime).HasDefaultValue(DateTime.Now);
            builder.Property(x => x.UpdatedTime).HasDefaultValue(DateTime.Now);
            builder.Property(x => x.IsDeleted).HasDefaultValue(false);
        }
    }
}

using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Configurations
{
    public class CartConfig : IEntityTypeConfiguration<Cart>
    {
        public void Configure(EntityTypeBuilder<Cart> builder)
        {
            builder.HasKey(c => new { c.ProductId, c.UserId });
            builder.Property(x => x.Amount).IsRequired().HasDefaultValue(1);
            builder.Property(x => x.IsDeleted).HasDefaultValue(false);
        }
    }
}

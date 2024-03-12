using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Configurations
{
    public class CartConfig : IEntityTypeConfiguration<Cart>
    {
        public void Configure(EntityTypeBuilder<Cart> builder)
        {
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.IsDeleted).HasDefaultValue(false);
        }
    }
}

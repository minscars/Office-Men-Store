using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Configurations
{
    public class CartItemConfig : IEntityTypeConfiguration<CartItem>
    {
        public void Configure(EntityTypeBuilder<CartItem> builder)
        {
            builder.HasKey(c => new { c.CartId, c.ProductId, c.SizeProductId });
        }
    }
}

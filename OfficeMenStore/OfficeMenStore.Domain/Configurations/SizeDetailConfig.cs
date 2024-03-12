using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Domain.Configurations
{
    public class SizeDetailConfig : IEntityTypeConfiguration<SizeDetail>
    {
        public void Configure(EntityTypeBuilder<SizeDetail> builder)
        {
            builder.HasKey(s => new { s.ProductId, s.SizeProductId });
        }

    }
}

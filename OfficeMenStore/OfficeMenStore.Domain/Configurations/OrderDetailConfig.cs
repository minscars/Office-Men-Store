using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Configurations
{
    public class OrderDetailConfig : IEntityTypeConfiguration<OrderDetail>
    {
        public void Configure(EntityTypeBuilder<OrderDetail> builder)
        {
            //Bảng phụ có thêm Config: kéo 2 khóa chính về làm khóa chính:
            builder.HasKey(c => new { c.OrderId, c.ProductId , c.SizeProductId });
            builder.Property(x => x.OrderId).IsRequired();
            builder.Property(x => x.Amount).IsRequired().HasDefaultValue(1);
            builder.Property(x => x.OrderPrice).IsRequired();
        }
    }
}

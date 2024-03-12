using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Configurations
{
    public class SizeConfig : IEntityTypeConfiguration<SizeProduct>
    {
        public void Configure(EntityTypeBuilder<SizeProduct> builder)
        {
            builder.Property(x => x.Id).IsRequired();
            builder.Property(x => x.Name).IsRequired();
        }
    }
}

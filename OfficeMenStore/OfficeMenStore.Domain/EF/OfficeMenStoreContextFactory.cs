using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace OfficeMenStore.Domain.EF
{
    public class OfficeMenStoreContextFactory : IDesignTimeDbContextFactory<OfficeMenStoreDbContext>
    {
        public OfficeMenStoreDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();

            var connectionString = configuration.GetConnectionString("Default");

            var optionsBuilder = new DbContextOptionsBuilder<OfficeMenStoreDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new OfficeMenStoreDbContext(optionsBuilder.Options);
        }
    }
}

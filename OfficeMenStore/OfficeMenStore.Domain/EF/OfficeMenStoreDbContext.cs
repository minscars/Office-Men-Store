using OfficeMenStore.Domain.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Domain.Configurations;
using OfficeMenStore.Domain.Extentions;

namespace OfficeMenStore.Domain.EF
{
    public class OfficeMenStoreDbContext : IdentityDbContext<User, UserRole, Guid>
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<User> AppUser { get; set; }
        public DbSet<UserRole> UserRoles {  get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<FeedBack> FeedBacks { get; set; }

        public OfficeMenStoreDbContext(DbContextOptions<OfficeMenStoreDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new ProductConfig())
                        .ApplyConfiguration(new CategoryConfig())
                        .ApplyConfiguration(new CartConfig())
                        .ApplyConfiguration(new OrderConfig())
                        .ApplyConfiguration(new FeedBackConfig())
                        .ApplyConfiguration(new OrderDetailConfig())
                        .ApplyConfiguration(new UserConfig());
            modelBuilder.FillDataProduct();
            modelBuilder.FillDataCategory();
            modelBuilder.FillDataCart();
            modelBuilder.FillDataOrder();
            modelBuilder.FillDataOrderDetail();
            modelBuilder.FillDataUser();
            modelBuilder.FillDataFeedBack();

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var tableName = entityType.GetTableName();
                if (tableName!.StartsWith("AspNet"))
                {
                    entityType.SetTableName(tableName.Substring(6));
                }
            }
        }
    }
}

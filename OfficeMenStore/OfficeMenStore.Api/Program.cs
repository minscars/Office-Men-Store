using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Mapping;
using OfficeMenStore.Application.Services;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CORS",
                      policy =>
                      {
                          policy.SetIsOriginAllowed(a => true)
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                      });
});
builder.Services.AddDbContext<OfficeMenStoreDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")),
    ServiceLifetime.Transient);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "OfficeMenStore.Api", Version = "v1" });
});

//Add Identity
builder.Services.AddIdentity<User, UserRole>()
        .AddEntityFrameworkStores<OfficeMenStoreDbContext>()
        .AddDefaultTokenProviders();

//Add automapper
builder.Services.AddAutoMapper(typeof(MappingProfile).Assembly);

//DI
builder.Services.AddTransient<IProductService, ProductService>();
builder.Services.AddMvc()
                .AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "OfficeMenStore.Api v1"));
}
app.UseCors("CORS");

app.UseStaticFiles();

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseAuthentication();

app.MapControllers();

app.Run();

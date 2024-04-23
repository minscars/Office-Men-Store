using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class addpromotionentities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(7204),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(6822),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421));

            migrationBuilder.AddColumn<decimal>(
                name: "ShippingDiscount",
                table: "Orders",
                type: "decimal(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "ShippingFee",
                table: "Orders",
                type: "decimal(18,2)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "VoucherDiscount",
                table: "Orders",
                type: "decimal(18,2)",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 144, DateTimeKind.Local).AddTicks(751),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(7282));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8451),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5626));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8154),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5374));

            migrationBuilder.CreateTable(
                name: "PromotionTypes",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 145, DateTimeKind.Local).AddTicks(5149)),
                    UpdatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 145, DateTimeKind.Local).AddTicks(5421)),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PromotionTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Promotions",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LeastValueCondition = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    DiscountPercent = table.Column<int>(type: "int", nullable: true),
                    MaxDiscount = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    Discount = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    PromotionTypeId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 145, DateTimeKind.Local).AddTicks(1331)),
                    UpdatedTime = table.Column<DateTime>(type: "datetime2", nullable: true, defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 145, DateTimeKind.Local).AddTicks(1723)),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Promotions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Promotions_PromotionTypes_PromotionTypeId",
                        column: x => x.PromotionTypeId,
                        principalTable: "PromotionTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PromotionDetails",
                columns: table => new
                {
                    PromotionId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    OrderId = table.Column<int>(type: "int", nullable: false),
                    AppliedTime = table.Column<DateTime>(type: "datetime2", nullable: false, defaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 145, DateTimeKind.Local).AddTicks(4528)),
                    Discount = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PromotionDetails", x => new { x.OrderId, x.PromotionId });
                    table.ForeignKey(
                        name: "FK_PromotionDetails_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PromotionDetails_Promotions_PromotionId",
                        column: x => x.PromotionId,
                        principalTable: "Promotions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8154), new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8451) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8154), new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8451) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8154), new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8451) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 4, 22, 10, 42, 14, 155, DateTimeKind.Local).AddTicks(6795));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(6822), new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(7204) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(6822), new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(7204) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(6822), new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(7204) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(6822), new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(7204) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(6822), new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(7204) });

            migrationBuilder.InsertData(
                table: "PromotionTypes",
                columns: new[] { "Id", "CreatedTime", "Name", "UpdatedTime" },
                values: new object[,]
                {
                    { "6052d868-af98-4327-91e2-080bf9b1c192", new DateTime(2024, 4, 22, 3, 42, 14, 155, DateTimeKind.Utc).AddTicks(7018), "Shop voucher", new DateTime(2024, 4, 22, 3, 42, 14, 155, DateTimeKind.Utc).AddTicks(7019) },
                    { "c5f71742-8892-40ac-a81f-f7c413bdc6e2", new DateTime(2024, 4, 22, 3, 42, 14, 155, DateTimeKind.Utc).AddTicks(7014), "Shipping fee discount", new DateTime(2024, 4, 22, 3, 42, 14, 155, DateTimeKind.Utc).AddTicks(7015) }
                });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "81d3ce9b-1aad-479d-9ec4-612af599cd95");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "41a2b27f-c03c-4cde-b780-5f8c35db0875");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "863112e9-43a8-4c24-a353-2471855e0516", "AQAAAAEAACcQAAAAEILBm98/i7Md2z0SlFcbKNgrK2SkUPithZ+jQHekOaw4OqxnwZwwFhDEMVuTNtMtEg==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "505d9cf8-324b-4ae5-a833-732a1a23f41c", "AQAAAAEAACcQAAAAENsAh55PfNkGfzTJow4j8QMxN9JIiv4/GTIHODjkGn2WiX3oeUYqpjkYWxcxgsHnIg==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "67fd51d0-f132-4147-b6c6-1a031e9c4706", "AQAAAAEAACcQAAAAEO1KOT142P7+IZq/PKMlb8j3uSn/qVWw9V7g8XHsiL18rMKjFHzBbiZ6YIDoehkjzw==" });

            migrationBuilder.InsertData(
                table: "Promotions",
                columns: new[] { "Id", "Code", "CreatedTime", "Description", "Discount", "DiscountPercent", "EndDate", "LeastValueCondition", "MaxDiscount", "PromotionTypeId", "StartDate", "UpdatedTime" },
                values: new object[,]
                {
                    { "04e10389-fbed-4edf-95bf-addcd187a4e6", "ENJOYMATCH", new DateTime(2024, 4, 22, 10, 42, 14, 155, DateTimeKind.Local).AddTicks(7080), "Voucher 100.000 VND for order value at least 1.000.000 VND", 100000m, null, new DateTime(2024, 4, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 1000000m, null, "6052d868-af98-4327-91e2-080bf9b1c192", new DateTime(2024, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 4, 22, 10, 42, 14, 155, DateTimeKind.Local).AddTicks(7081) },
                    { "3d6d99a1-260c-40fa-9592-9db55cdc6e9a", "FREESHIP", new DateTime(2024, 4, 22, 10, 42, 14, 155, DateTimeKind.Local).AddTicks(7066), "Free ship for order value at least 500.000 VND", null, 100, new DateTime(2024, 4, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), 500000m, null, "c5f71742-8892-40ac-a81f-f7c413bdc6e2", new DateTime(2024, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 4, 22, 10, 42, 14, 155, DateTimeKind.Local).AddTicks(7068) }
                });

            migrationBuilder.CreateIndex(
                name: "IX_PromotionDetails_PromotionId",
                table: "PromotionDetails",
                column: "PromotionId");

            migrationBuilder.CreateIndex(
                name: "IX_Promotions_PromotionTypeId",
                table: "Promotions",
                column: "PromotionTypeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PromotionDetails");

            migrationBuilder.DropTable(
                name: "Promotions");

            migrationBuilder.DropTable(
                name: "PromotionTypes");

            migrationBuilder.DropColumn(
                name: "ShippingDiscount",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "ShippingFee",
                table: "Orders");

            migrationBuilder.DropColumn(
                name: "VoucherDiscount",
                table: "Orders");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(7204));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(6822));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(7282),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 144, DateTimeKind.Local).AddTicks(751));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5626),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8451));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5374),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 22, 10, 42, 14, 143, DateTimeKind.Local).AddTicks(8154));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5374), new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5626) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5374), new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5626) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5374), new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5626) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 4, 17, 20, 9, 1, 789, DateTimeKind.Local).AddTicks(4559));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421), new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421), new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421), new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421), new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421), new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "2fd97831-855b-4d73-8c63-15c709c80635");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "3ca278a0-cf26-4f62-9ce0-26d6ae5f11be");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "0400ec35-13d5-4d3a-bd28-ebf8261027a1", "AQAAAAEAACcQAAAAENNf8e1B4cbr5zheco4eJlPxuOs/bNGMzS6LKGsCvtpe0WYK1SnD+js418Tq8HgPrA==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "bc6cc532-6b6b-4765-a83d-fd49cd35669d", "AQAAAAEAACcQAAAAEPd05P5+xUDPdUkVBbLgTUdwiBl+6Zbg9yYPcvMXbSWPve9lty2UWIKNTqnDzsVtCg==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "0d119dc3-5794-4011-a1d3-42f7ad715af1", "AQAAAAEAACcQAAAAEBa5yqxfuevzku7EJi38DnwKXcrzOYtA1t29bQCE70QJfq2f2m9QzVFIJniDWcrVhw==" });
        }
    }
}

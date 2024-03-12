using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updatecartitementity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(7909),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 220, DateTimeKind.Local).AddTicks(3132));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(5958),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(9303));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(4184),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(8780));

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "CartItems",
                type: "bit",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "bit",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "CartItems",
                keyColumns: new[] { "CartId", "ProductId", "SizeId" },
                keyValues: new object[] { 1, 1, 1 },
                column: "IsDeleted",
                value: false);

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(4184), new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(5958) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(4184), new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(5958) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(4184), new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(5958) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 8, 15, 2, 37, 423, DateTimeKind.Local).AddTicks(623));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderTime",
                value: new DateTime(2024, 3, 8, 15, 2, 37, 417, DateTimeKind.Local).AddTicks(7968));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060), new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060), new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060), new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060), new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060), new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "b251b3ff-8de6-4967-9409-3e41f297f7e0");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "3fcd8398-a49d-4fdc-bfe3-cdb5b8598c57");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "18344bfa-bc5b-46e6-9655-62aaa5e26936", "AQAAAAEAACcQAAAAEK425ZVB7HugUwlPygLkubt9In9ArPcqxqmLjUKZMfUTqYaS2/CFEK9dx5BGuGIVyQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "f07d67b8-4400-43be-abab-c0e3e0504312", "AQAAAAEAACcQAAAAEHmEndfehqjUoFtudxkIENyzXIrjr82mf0MY0DkECElHTlRG7vzJGPKMJFdLtStiZA==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "b49ff7a1-e5cf-4cdb-8e2b-38c205e18369", "AQAAAAEAACcQAAAAEJmxTrui9SkWBjB7W583tpLd3cYaucArL/zIHJH8DbxrzfCnZgme4vPzeYSOvLabMg==" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 220, DateTimeKind.Local).AddTicks(3132),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(7909));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(9303),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(5958));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(8780),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(4184));

            migrationBuilder.AlterColumn<bool>(
                name: "IsDeleted",
                table: "CartItems",
                type: "bit",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.UpdateData(
                table: "CartItems",
                keyColumns: new[] { "CartId", "ProductId", "SizeId" },
                keyValues: new object[] { 1, 1, 1 },
                column: "IsDeleted",
                value: null);

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(8780), new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(9303) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(8780), new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(9303) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(8780), new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(9303) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 8, 14, 16, 36, 231, DateTimeKind.Local).AddTicks(1754));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderTime",
                value: new DateTime(2024, 3, 8, 14, 16, 36, 221, DateTimeKind.Local).AddTicks(7523));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541), new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541), new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541), new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541), new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541), new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "b9d99601-5105-4a62-a335-a279ac4185fd");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "ba494e03-e514-464c-b806-7a9ad23b1fdc");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "6abcd2ef-7753-4739-bb2e-d58cae6f51e8", "AQAAAAEAACcQAAAAEOvu4eD9+TulQToC+vmK1OFz9w4KNufCNzvULLJH0OKsrq+ksLf5Iq5Bxf37i6ciPA==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a6e469f3-df16-4af9-bb34-c5d0853bb44a", "AQAAAAEAACcQAAAAEEdPlJ7IsxVE8KVka6W4uzYl6bbub1rnNP8ul++m6Hdvhxu/VXCXjy07PnLdpi1Yyg==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "2dedfe3c-0793-4a81-bf0e-0947c1a59c30", "AQAAAAEAACcQAAAAEBbBCHhIpdXIigkiX/E61eqKprto+uRRceLSbFATVezgyrVjyy5+y9sT228zA0fBZg==" });
        }
    }
}

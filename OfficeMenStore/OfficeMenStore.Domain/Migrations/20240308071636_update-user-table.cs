using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updateusertable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Carts_UserId",
                table: "Carts");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 220, DateTimeKind.Local).AddTicks(3132),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(7058));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(9303),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5460));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(8780),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5236));

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

            migrationBuilder.CreateIndex(
                name: "IX_Carts_UserId",
                table: "Carts",
                column: "UserId",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Carts_UserId",
                table: "Carts");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(7183));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(6541));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(7058),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 220, DateTimeKind.Local).AddTicks(3132));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5460),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(9303));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5236),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 14, 16, 36, 219, DateTimeKind.Local).AddTicks(8780));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5236), new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5460) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5236), new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5460) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5236), new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5460) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 8, 0, 40, 57, 109, DateTimeKind.Local).AddTicks(5096));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderTime",
                value: new DateTime(2024, 3, 8, 0, 40, 57, 103, DateTimeKind.Local).AddTicks(3873));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210), new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210), new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210), new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210), new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210), new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "97c08487-d00c-4d98-ad74-2cc354fd406f");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "71b06387-c9f5-434d-8c08-e29caf348114");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "25cb3731-e2be-42f1-b048-c968f80e18b1", "AQAAAAEAACcQAAAAELC79WUPQXzGHnHWExlrZw8ZfKBb3QAtuVmMTI1i4UKHO/+iLujbe0cWIWwdjkDj+w==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "1f4c0035-47d5-4e1e-9179-24a4d99af09c", "AQAAAAEAACcQAAAAELnW8EY7bkw6UL22piYwL3+n5nrgVtOTuR2b9NMLFI7pChvKLp8iPova/k8HizmMnA==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "5d87972f-6b34-4556-bc27-4186a786363d", "AQAAAAEAACcQAAAAEBLohM5PuUOoQUMXqhTIfIUcrc6aAi75tqvVEJAsLoss6aVDaxRNo3oHH+ClELFEIA==" });

            migrationBuilder.CreateIndex(
                name: "IX_Carts_UserId",
                table: "Carts",
                column: "UserId");
        }
    }
}

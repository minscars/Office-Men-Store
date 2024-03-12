using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updateproducttable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883));

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(7058),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(8369));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5460),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6450));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5236),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6166));

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

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4464));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(4210));

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId",
                table: "Products",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(8369),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(7058));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6450),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5460));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6166),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 40, 57, 102, DateTimeKind.Local).AddTicks(5236));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6166), new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6450) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6166), new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6450) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6166), new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6450) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 8, 0, 19, 12, 199, DateTimeKind.Local).AddTicks(4596));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderTime",
                value: new DateTime(2024, 3, 8, 0, 19, 12, 193, DateTimeKind.Local).AddTicks(6972));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883), new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883), new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883), new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883), new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883), new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "54188091-75b8-4aeb-bca3-66ad73c84d9c");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "068e4d6b-9927-4e93-b971-ccff719ce041");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "c9237ba6-9980-49ac-9233-380c6d6c4562", "AQAAAAEAACcQAAAAENw5AZ6B+LIQpJvhlDd46k0lIi+SwD4Tlf2NM+40pJiYdyIcTftib9a1oVZV4s6npQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "98d21857-eadb-432f-aff9-18271dff3b88", "AQAAAAEAACcQAAAAEBf1Q+7uLdTMtJIqtsRV5CU19pjkfWO0owc7ZCUEy1RJGKjGvVuGQpqKlTHioBsxFw==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "6f924659-b571-4f72-b2b9-bee6cce864eb", "AQAAAAEAACcQAAAAEO8c5uAa76IvBItG0otBIThM/jU8CuZvEdul6aliwzEGZfaUo3A72MvfHnD4Vtb15A==" });

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Categories_CategoryId",
                table: "Products",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id");
        }
    }
}

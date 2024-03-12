using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updatecartItemtable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4779));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4504));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(8369),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(7855));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6450),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5838));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6166),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5598));

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
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4779),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(5238));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4504),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(4883));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(7855),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(8369));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5838),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6450));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5598),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 0, 19, 12, 192, DateTimeKind.Local).AddTicks(6166));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5598), new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5838) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5598), new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5838) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5598), new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(5838) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 7, 22, 4, 39, 432, DateTimeKind.Local).AddTicks(3814));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderTime",
                value: new DateTime(2024, 3, 7, 22, 4, 39, 425, DateTimeKind.Local).AddTicks(6428));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4504), new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4779) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4504), new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4779) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4504), new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4779) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4504), new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4779) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4504), new DateTime(2024, 3, 7, 22, 4, 39, 424, DateTimeKind.Local).AddTicks(4779) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "13ab16e3-eb90-443c-b470-e35bd85ee07d");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "d3483630-7b38-43f8-b9de-79276b93292c");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "d99dd4b1-f550-4470-b3da-4018e10674cb", "AQAAAAEAACcQAAAAEGHCmcmofqGL2Dzqtwmr3xoHEHghkoFd4YhCjtnBe6gtqUI4gOOS7YCil/N0/+kQlQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "ae486a20-23ea-4dd1-94bf-0fb077f45471", "AQAAAAEAACcQAAAAEDo9xjQ+ERalesSPPTrkZn5EIJWDterILI31C+lrxlWU9nB7v/n2O2ozW0p8ykcMAQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4a6f63fe-7533-42b1-8c5b-68982a005ef1", "AQAAAAEAACcQAAAAEEHw1VP+9OhWUtZLogbjGQxd6HaT+Q2uElyUZef6904wxQHI+oygfqY199hadJYF/Q==" });
        }
    }
}

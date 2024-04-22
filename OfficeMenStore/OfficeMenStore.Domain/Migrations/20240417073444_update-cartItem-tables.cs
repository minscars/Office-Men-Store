using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updatecartItemtables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1470),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1154),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(3971),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(2558));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2385),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(1113));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2135),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(900));

            migrationBuilder.AddColumn<DateTime>(
                name: "AddedTime",
                table: "CartItems",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems",
                columns: new[] { "CartId", "ProductId", "SizeProductId", "AddedTime" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2135), new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2385) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2135), new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2385) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2135), new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2385) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 4, 17, 14, 34, 43, 926, DateTimeKind.Local).AddTicks(3869));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1154), new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1470) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1154), new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1470) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1154), new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1470) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1154), new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1470) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1154), new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1470) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "7c906914-9812-4a5f-be56-6698f7e5945b");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "cac8da6c-85a2-4317-a48b-83dd7e2467b7");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "452af19a-0b7f-4c24-a2d7-0537cd522e30", "AQAAAAEAACcQAAAAENrEVcHMdk1wFwEzBLfComhwLgyNV+EWjxJSGykUGF0QY0MG76+hlYHKQsSXUxYoiA==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "bfa216e8-c054-4367-b8ee-f7575f265f0f", "AQAAAAEAACcQAAAAEOxLZkZUU2ItktIczdXNlTcw3AsC5UPvQqmXTlV6C0S5aTualt5cor3K9/OmiOIdLg==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "af7ae24c-656d-4c29-8545-2775c2e4d65d", "AQAAAAEAACcQAAAAEHgoNmaaGajHlgDP7FONigcbQJMtvC++ZKXnLiYixBV8kSInCg2EvUerMpDKdA+hYw==" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems");

            migrationBuilder.DropColumn(
                name: "AddedTime",
                table: "CartItems");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1470));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(1154));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(2558),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(3971));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(1113),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2385));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(900),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 34, 43, 920, DateTimeKind.Local).AddTicks(2135));

            migrationBuilder.AddPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems",
                columns: new[] { "CartId", "ProductId", "SizeProductId" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(900), new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(1113) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(900), new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(1113) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(900), new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(1113) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 4, 12, 14, 18, 22, 219, DateTimeKind.Local).AddTicks(7618));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955), new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955), new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955), new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955), new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955), new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "6c317777-ab06-4ea6-8e33-f9f55727ab4c");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "9a4be949-73c2-4429-a2b3-fd2f6c9be08f");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "01a1b634-89d2-49b0-8d62-e2e0a3dc11f2", "AQAAAAEAACcQAAAAEH2PvLFXURvp5/c+OQt+0NqFbByxjla/M6ZA6R4T2Y3w044vWxseGlRrEIAbgoktPQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "da10ffec-cb8a-417b-978a-2aaefda431ca", "AQAAAAEAACcQAAAAEHjBBQ2qwR9yxFk1tV87G11SFu6lRxedlyAIBbD1z3jLDsWGIzQdkxgXBfF0caW0Ng==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "9db97257-7246-4b73-8e74-dce513f9fcc7", "AQAAAAEAACcQAAAAEBnATvgCYf1vi3SMjAvGLXDt2uX5EqEcrcCZaOjZsLZUbjuD60O9aaF8B8unerzIlg==" });
        }
    }
}

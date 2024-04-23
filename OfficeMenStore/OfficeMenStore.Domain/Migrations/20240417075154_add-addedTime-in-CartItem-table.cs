using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class addaddedTimeinCartItemtable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4860));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4594));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(2995),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(7214));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1562),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5695));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1350),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5515));

            migrationBuilder.AddColumn<DateTime>(
                name: "AddedTime",
                table: "CartItems",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1350), new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1562) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1350), new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1562) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1350), new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1562) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 4, 17, 14, 51, 54, 220, DateTimeKind.Local).AddTicks(363));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414), new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414), new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414), new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414), new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414), new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "1dad8c2c-ed83-4837-99d4-f65a5622c83c");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "bdcc7795-155a-4548-aa9c-d090f68c9685");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4dedeb65-a95e-48a3-9558-194066499a5a", "AQAAAAEAACcQAAAAEBIlnUM7Ub/khOFBLUj+9sQR9y84WIDgh+qBHUANRs0HfBVhMeXsVX677Oeg2pts5g==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "d216d3e1-77e6-430a-beca-1896f1d9f600", "AQAAAAEAACcQAAAAEPtxZEGzlu/1cFFDIBQnqSDw98cY+opxg/LPtLlqHuJYcycnYKqzhryipC0UPQwwOA==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "0021d706-6aa9-49a7-bc49-fea8a9256d9a", "AQAAAAEAACcQAAAAEC5zRthRB0LcOSocORTsxuxI0UQWH6SBc4SPcJSOSWnwIe+GjEWOINtnOny014YKfA==" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AddedTime",
                table: "CartItems");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4860),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4594),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(7214),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(2995));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5695),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1562));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5515),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1350));

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5515), new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5695) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5515), new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5695) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5515), new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(5695) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 4, 17, 14, 42, 41, 729, DateTimeKind.Local).AddTicks(3037));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4594), new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4860) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4594), new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4860) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4594), new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4860) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4594), new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4860) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4594), new DateTime(2024, 4, 17, 14, 42, 41, 723, DateTimeKind.Local).AddTicks(4860) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "caee532d-77ac-4f5d-94d8-09b4c67f0611");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "55cc4d22-aba0-4a69-b0ca-9b712011c15c");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "4c366bd7-081e-4e04-9e9e-46c29c4e444b", "AQAAAAEAACcQAAAAEFry26QPrSXmCwdIQSOVNeNbUxYVdnItldar4x0HcRbVwAWGDRz4GsDICQsUHAcGEg==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "b97b379b-93af-4e8d-8362-537fea5b3920", "AQAAAAEAACcQAAAAEP57h40DqGaHESFyTso+jBr+HxBgB/8jvVXj6iEEojw+Bsp8SCH536m8vcAxjo1XVg==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "3474a1e0-a4ba-4bd7-bd08-edea58e5c4aa", "AQAAAAEAACcQAAAAEDcIBiS9bw2G5Csv9l4hycXMsfVx8bgJ8LS1mhRLd5whWEKT7h0mA0cOfiRVRRsUGQ==" });
        }
    }
}

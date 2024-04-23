using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updateorderdetailtable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderDetails",
                table: "OrderDetails");

            migrationBuilder.DropColumn(
                name: "SizeId",
                table: "OrderDetails");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7936));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7678));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(2558),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 727, DateTimeKind.Local).AddTicks(122));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(1113),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8818));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(900),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8647));

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderDetails",
                table: "OrderDetails",
                columns: new[] { "OrderId", "ProductId", "SizeProductId" });

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderDetails",
                table: "OrderDetails");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7936),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(259));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7678),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 212, DateTimeKind.Local).AddTicks(9955));

            migrationBuilder.AddColumn<int>(
                name: "SizeId",
                table: "OrderDetails",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 727, DateTimeKind.Local).AddTicks(122),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(2558));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8818),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(1113));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8647),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 12, 14, 18, 22, 213, DateTimeKind.Local).AddTicks(900));

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderDetails",
                table: "OrderDetails",
                columns: new[] { "OrderId", "ProductId", "SizeId" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8647), new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8818) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8647), new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8818) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8647), new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(8818) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 4, 12, 0, 41, 43, 731, DateTimeKind.Local).AddTicks(5647));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7678), new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7936) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7678), new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7936) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7678), new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7936) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7678), new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7936) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7678), new DateTime(2024, 4, 12, 0, 41, 43, 726, DateTimeKind.Local).AddTicks(7936) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "44808810-a2b8-45df-a82d-b1fdad5e31a1");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "fa1e6476-a986-44b0-a7fa-6cbc8e4f2091");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "89f33966-eb66-44a9-99df-a9437928b2e7", "AQAAAAEAACcQAAAAEE0TsXFlf3Kg+Y8QnMr93ccCSrSb0GGAG4nvOW22vvejWUh05WqIrXsyUUS/CbT3ZQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a263b22c-9ad4-44aa-918f-b3d1896f5a48", "AQAAAAEAACcQAAAAEGq5A31fE7GlRWscShZR3VxoTYgsP32uPWOgt5fVodis7NH+8fyVbpnVrR89+29aTQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "cb6c29ea-e1e8-4ed5-b909-9cdc8150a85e", "AQAAAAEAACcQAAAAEMOmtBNEGXIAaUA6Ry1gOo3lAIfWOa1POzbBNr63FwnHxyNu9ZM5AxGm/QrfziA92Q==" });
        }
    }
}

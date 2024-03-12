using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updatesometables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Sizes_SizeId",
                table: "CartItems");

            migrationBuilder.DropForeignKey(
                name: "FK_SizeDetails_Sizes_SizeId",
                table: "SizeDetails");

            migrationBuilder.DropTable(
                name: "Sizes");

            migrationBuilder.RenameColumn(
                name: "SizeId",
                table: "SizeDetails",
                newName: "SizeProductId");

            migrationBuilder.RenameIndex(
                name: "IX_SizeDetails_SizeId",
                table: "SizeDetails",
                newName: "IX_SizeDetails_SizeProductId");

            migrationBuilder.RenameColumn(
                name: "SizeId",
                table: "CartItems",
                newName: "SizeProductId");

            migrationBuilder.RenameIndex(
                name: "IX_CartItems_SizeId",
                table: "CartItems",
                newName: "IX_CartItems_SizeProductId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5680),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5459),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(8151),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(7909));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6558),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(5958));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6336),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(4184));

            migrationBuilder.CreateTable(
                name: "SizeProducts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SizeProducts", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6336), new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6558) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6336), new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6558) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6336), new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6558) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 3, 12, 11, 33, 54, 684, DateTimeKind.Local).AddTicks(3380));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "OrderTime",
                value: new DateTime(2024, 3, 12, 11, 33, 54, 679, DateTimeKind.Local).AddTicks(4302));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5459), new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5680) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5459), new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5680) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5459), new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5680) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5459), new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5680) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5459), new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5680) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "40fe7574-a033-411f-be5e-76242719bf29");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "2a40edde-e23f-428c-bdf0-e1c8dc9f75b8");

            migrationBuilder.InsertData(
                table: "SizeProducts",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "M" },
                    { 2, "L" },
                    { 3, "XL" },
                    { 4, "XXL" }
                });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "e4ee1f5f-4a86-49f4-8ce7-6c6084ee81e5", "AQAAAAEAACcQAAAAEIvPrPAqTIAJbY6oDS/huvv0lwNpfkcBlChOpcBnf/F0wEzKbCLI38LmEr/zHZFjkQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "534c1a92-0eb6-4046-a631-dd8249f6c0e7", "AQAAAAEAACcQAAAAEGGN4PRy0G0rWldJf5RFKGeV9xwhnxjQbCq8y4ed5pNjb2YYUI3uIJ3G1E0oBc2Tbw==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "5cd8cb6f-8038-4bfd-bf0f-b84ac333fdd9", "AQAAAAEAACcQAAAAEJiMBmJJnpuuLeEG3F6sbUZ7V9em3DZQ6I15RQ/uw91JxpdrWR2+PsTADCRBMvSSBA==" });

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_SizeProducts_SizeProductId",
                table: "CartItems",
                column: "SizeProductId",
                principalTable: "SizeProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SizeDetails_SizeProducts_SizeProductId",
                table: "SizeDetails",
                column: "SizeProductId",
                principalTable: "SizeProducts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_SizeProducts_SizeProductId",
                table: "CartItems");

            migrationBuilder.DropForeignKey(
                name: "FK_SizeDetails_SizeProducts_SizeProductId",
                table: "SizeDetails");

            migrationBuilder.DropTable(
                name: "SizeProducts");

            migrationBuilder.RenameColumn(
                name: "SizeProductId",
                table: "SizeDetails",
                newName: "SizeId");

            migrationBuilder.RenameIndex(
                name: "IX_SizeDetails_SizeProductId",
                table: "SizeDetails",
                newName: "IX_SizeDetails_SizeId");

            migrationBuilder.RenameColumn(
                name: "SizeProductId",
                table: "CartItems",
                newName: "SizeId");

            migrationBuilder.RenameIndex(
                name: "IX_CartItems_SizeProductId",
                table: "CartItems",
                newName: "IX_CartItems_SizeId");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3373),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5680));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(3060),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(5459));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(7909),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(8151));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(5958),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6558));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 3, 8, 15, 2, 37, 416, DateTimeKind.Local).AddTicks(4184),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 3, 12, 11, 33, 54, 678, DateTimeKind.Local).AddTicks(6336));

            migrationBuilder.CreateTable(
                name: "Sizes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sizes", x => x.Id);
                });

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

            migrationBuilder.InsertData(
                table: "Sizes",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "M" },
                    { 2, "L" },
                    { 3, "XL" },
                    { 4, "XXL" }
                });

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

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Sizes_SizeId",
                table: "CartItems",
                column: "SizeId",
                principalTable: "Sizes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SizeDetails_Sizes_SizeId",
                table: "SizeDetails",
                column: "SizeId",
                principalTable: "Sizes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

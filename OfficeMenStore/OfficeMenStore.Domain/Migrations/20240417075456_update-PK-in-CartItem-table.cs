using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updatePKinCartItemtable : Migration
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
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(2592),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(2995));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(1052),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1562));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(856),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1350));

            migrationBuilder.AddPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems",
                columns: new[] { "CartId", "ProductId", "SizeProductId", "AddedTime" });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(856), new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(1052) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(856), new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(1052) });

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(856), new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(1052) });

            migrationBuilder.UpdateData(
                table: "FeedBacks",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreatedDate",
                value: new DateTime(2024, 4, 17, 14, 54, 56, 180, DateTimeKind.Local).AddTicks(9528));

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848), new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848), new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848), new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848), new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129) });

            migrationBuilder.UpdateData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "CreatedTime", "UpdatedTime" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848), new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129) });

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("8f7579ee-4af9-4b71-9ada-7f792f76dc31"),
                column: "ConcurrencyStamp",
                value: "8567cb11-d160-46f1-ac01-44acab261982");

            migrationBuilder.UpdateData(
                table: "Roles",
                keyColumn: "Id",
                keyValue: new Guid("9e87b492-5343-4272-9a34-fa5de7cffb22"),
                column: "ConcurrencyStamp",
                value: "ef914d85-538d-413e-818a-a67fa695bc44");

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("2a738bf3-a14b-488e-b04e-17f918e8d6a4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "490d47f0-65c8-4a94-ae62-a80c2f5cf464", "AQAAAAEAACcQAAAAENS0J89cFEKmY0FtNJ30rrG1I/+7m14gsycezQ64vyIqFyAlSUI/ap79fPBkkoE4tQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("372ea575-2536-4076-9bab-3e3138de495f"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "900bd892-e4e1-4e1c-9711-2273a61d5d5e", "AQAAAAEAACcQAAAAEL8Pbcs5K5mqXvQY3Qa6DELUAp6YP3bBopHVj/GL1/eXmRHdp3GfoUHB4pHaerFRAQ==" });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("8a820adb-93d7-4c6f-9404-bdbfc14419f4"),
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "0d78976f-7606-408f-803a-a2f755240817", "AQAAAAEAACcQAAAAEFJenlKmB1Z+BCFZnz7cv/I6G0dZjfKYEeG+qlmY1SqySLxSdFXdTyptxlqC7OvwDg==" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(700),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(414),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(2995),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(2592));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1562),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(1052));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 51, 54, 213, DateTimeKind.Local).AddTicks(1350),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(856));

            migrationBuilder.AddPrimaryKey(
                name: "PK_CartItems",
                table: "CartItems",
                columns: new[] { "CartId", "ProductId", "SizeProductId" });

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
    }
}

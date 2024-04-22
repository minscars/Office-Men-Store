using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OfficeMenStore.Domain.Migrations
{
    /// <inheritdoc />
    public partial class updatefeedbacktable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FeedBacks_Products_ProductId",
                table: "FeedBacks");

            migrationBuilder.DropForeignKey(
                name: "FK_FeedBacks_Users_UserId",
                table: "FeedBacks");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848));

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "FeedBacks",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "Rate",
                table: "FeedBacks",
                type: "float",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true,
                oldDefaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "FeedBacks",
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
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(7282),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(2592));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5626),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(1052));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5374),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(856));

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
                columns: new[] { "CreatedDate", "Rate" },
                values: new object[] { new DateTime(2024, 4, 17, 20, 9, 1, 789, DateTimeKind.Local).AddTicks(4559), 5.0 });

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

            migrationBuilder.AddForeignKey(
                name: "FK_FeedBacks_Products_ProductId",
                table: "FeedBacks",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FeedBacks_Users_UserId",
                table: "FeedBacks",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FeedBacks_Products_ProductId",
                table: "FeedBacks");

            migrationBuilder.DropForeignKey(
                name: "FK_FeedBacks_Users_UserId",
                table: "FeedBacks");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(129),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4733));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 174, DateTimeKind.Local).AddTicks(9848),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(4421));

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "FeedBacks",
                type: "uniqueidentifier",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.AlterColumn<int>(
                name: "Rate",
                table: "FeedBacks",
                type: "int",
                nullable: true,
                defaultValue: 0,
                oldClrType: typeof(double),
                oldType: "float",
                oldDefaultValue: 0.0);

            migrationBuilder.AlterColumn<int>(
                name: "ProductId",
                table: "FeedBacks",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedDate",
                table: "FeedBacks",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(2592),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(7282));

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(1052),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5626));

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedTime",
                table: "Categories",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(2024, 4, 17, 14, 54, 56, 175, DateTimeKind.Local).AddTicks(856),
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true,
                oldDefaultValue: new DateTime(2024, 4, 17, 20, 9, 1, 783, DateTimeKind.Local).AddTicks(5374));

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
                columns: new[] { "CreatedDate", "Rate" },
                values: new object[] { new DateTime(2024, 4, 17, 14, 54, 56, 180, DateTimeKind.Local).AddTicks(9528), 5 });

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

            migrationBuilder.AddForeignKey(
                name: "FK_FeedBacks_Products_ProductId",
                table: "FeedBacks",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FeedBacks_Users_UserId",
                table: "FeedBacks",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }
    }
}

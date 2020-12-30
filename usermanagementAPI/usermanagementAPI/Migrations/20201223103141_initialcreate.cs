using Microsoft.EntityFrameworkCore.Migrations;

namespace usermanagementAPI.Migrations
{
    public partial class initialcreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "userdetails",
                columns: table => new
                {
                    userid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    lastName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    phone = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    address = table.Column<string>(type: "nvarchar(250)", nullable: true),
                    gender = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    active = table.Column<string>(type: "nvarchar(10)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userdetails", x => x.userid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "userdetails");
        }
    }
}

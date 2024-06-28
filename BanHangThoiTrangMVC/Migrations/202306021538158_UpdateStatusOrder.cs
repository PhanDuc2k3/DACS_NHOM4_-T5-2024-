namespace BanHangThoiTrangMVC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateStatusOrder : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.tb_Order", "Status", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.tb_Order", "Status");
        }
    }
}
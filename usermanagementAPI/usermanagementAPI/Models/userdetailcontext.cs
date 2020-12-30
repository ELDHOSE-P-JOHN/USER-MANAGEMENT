using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace usermanagementAPI.Models
{
    public class userdetailcontext:DbContext
    {
        public userdetailcontext(DbContextOptions<userdetailcontext>options):base(options)
        {

        }
        public DbSet<userdetail> userdetails { get; set; }
    }
}

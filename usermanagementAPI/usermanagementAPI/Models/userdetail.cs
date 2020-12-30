using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace usermanagementAPI.Models
{
    public class userdetail
    {[Key]
        public int userid { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string firstName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string lastName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string phone { get; set; }
        [Column(TypeName = "nvarchar(250)")]
        public string address { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string gender { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string active { get; set; }
    }  
}

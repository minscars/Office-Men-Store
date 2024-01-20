using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Models
{
    public class FeedBack
    {
        public int Id { get; set; }
        public Guid? UserId { get; set; }
        public int? ProductId { get; set; }
        public string? Content { get; set; }
        public int? Rate { get; set; }
        public Boolean? IsDeleted { get; set; }
        public DateTime? CreatedDate { get; set; }
        public virtual Product Product { get; set; }
        public virtual User User { get; set; }
    }
}

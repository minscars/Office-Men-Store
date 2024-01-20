using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Models
{
    public class Cart
    {
        public int ProductId { get; set; }
        public Guid UserId { get; set; }
        public int? Amount { get; set; }
        public bool? IsDeleted { get; set; }
        public virtual User User { get; set; }
        public virtual Product Product { get; set; }
    }
}

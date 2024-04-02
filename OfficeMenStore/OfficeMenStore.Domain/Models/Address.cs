using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Models
{
    public class Address
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public string AddressDetail { get; set; }
        public bool IsDeleted { get; set; }
        public virtual User User { get; set; }
    }
}

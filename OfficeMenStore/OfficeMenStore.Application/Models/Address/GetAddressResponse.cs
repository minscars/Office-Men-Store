using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Address
{
    public class GetAddressResponse
    {
        public int Id { get; set; }
        public string AddressDetail { get; set; }
        public Guid UserId { get; set; }
        public bool IsDeleted { get; set; }
    }
}

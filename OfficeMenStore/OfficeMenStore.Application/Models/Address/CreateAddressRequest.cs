using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Address
{
    public class CreateAddressRequest
    {
        public string AddressDetail { get; set; }
        public string UserId { get; set; }
    }
}

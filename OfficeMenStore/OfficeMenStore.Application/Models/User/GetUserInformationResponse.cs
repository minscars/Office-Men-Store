using OfficeMenStore.Application.Models.Address;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.User
{
    public class GetUserInformationResponse
    {
        public Guid UserId { get; set; }
        public int CartId { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Avatar {  get; set; }
        public string Email { get; set; }
        public List<GetAddressResponse> Addresses { get; set; }
    }
}

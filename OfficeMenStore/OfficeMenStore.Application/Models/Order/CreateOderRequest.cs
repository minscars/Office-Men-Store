using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Order
{
    public class CreateOderRequest
    {
        public int CartId { get; set; }
        public string UserId { get; set; }
        public int AddressId { get; set; }
        public int Pay {  get; set; }
    }
}

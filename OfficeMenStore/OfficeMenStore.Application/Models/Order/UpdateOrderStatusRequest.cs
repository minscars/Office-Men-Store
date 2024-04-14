
using OfficeMenStore.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Order
{
    public class UpdateOrderStatusRequest
    {
        public int OrderId { get; set; }
        public StatusEnums.Status OrderStatus { get; set; }
    }
}

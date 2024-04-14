using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Order
{
    public class GetAllOrderResponse
    {
        public int OrderId { get; set;}
        public string Code { get; set;}
        public decimal Total { get; set; }
        public string Status { get; set;}
        public DateTime CreatedTime { get; set;}
        public string OrderStatus { get; set;} 
        public string CustomerId { get; set;}
        public string CustomerName { get; set;}
        public string CustomerAvatar { get; set;}
    }
}

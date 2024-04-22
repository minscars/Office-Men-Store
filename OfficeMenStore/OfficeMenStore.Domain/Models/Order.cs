using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public Guid UserId { get; set; }
        public int Status { get; set; }
        public string AddressDelivery {  get; set; }
        public int PayStatus { get; set; }
        public DateTime OrderTime { get; set; }
        public DateTime ApproveTime { get; set; }
        public DateTime StartDeliveryTime { get; set; }
        public DateTime EndDeliveryTime { get; set; }
        public DateTime? CancelTime { get; set; }
        public DateTime? RejectedTime { get; set; }
        public decimal Total { get; set; }
        public decimal? ShippingFee { get; set; }
        public decimal? ShippingDiscount { get; set; }
        public decimal? VoucherDiscount { get; set; }
        public Boolean? IsDeleted { get; set; }
        public virtual User User { get; set; }
        public virtual List<OrderDetail> OrderDetails { get; set; }
    }
}

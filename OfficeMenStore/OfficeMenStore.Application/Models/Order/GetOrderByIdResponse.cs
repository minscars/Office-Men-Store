﻿using OfficeMenStore.Application.Models.OrderDetail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Order
{
    public class GetOrderByIdResponse
    {
        public int OrderId { get; set; }
        public string Code { get; set; }
        public string UserId { get; set; }
        public string OrderStatus { get; set; }
        public string AddressDelivery { get; set; }
        public string CustomerAvatar { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerPhone { get; set; }
        public string PayStatus { get; set; }
        public DateTime OrderTime { get; set; }
        public DateTime ApproveTime { get; set; }
        public DateTime StartDeliveryTime { get; set; }
        public DateTime EndDeliveryTime { get; set; }
        public DateTime? CancelTime { get; set; }
        public DateTime? RejectedTime { get; set; }
        public decimal Total { get; set; }
        public decimal VoucherDiscount { get; set; }
        public decimal ShippingFee { get; set; }
        public decimal ShippingDiscount { get; set; }
        public decimal GrandTotal { get; set; }
        public Boolean? IsDeleted { get; set; }
        public List<GetAllItemInOrderDetailResponse> ListItemOrderDetails { get; set; }
    }
}

﻿using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
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
        public string UserId { get; set; } = null!;
        public int AddressId { get; set; }
        public int Pay {  get; set; }
        public decimal Total { get; set; }
        public decimal? ShippingFee { get; set; }
        public decimal? ShippingDiscount { get; set; } = decimal.Zero;
        public string? ShippingPromotionId { get; set; }
        public decimal? VoucherDiscount { get; set; } = decimal.Zero;
        public string? ShopVoucherPromotionId { get; set; }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Size
{
    public class GetAmountProductSizeRequest
    {
        public int SizeId {  get; set; }
        public int ProductId { get; set; }
    }
}

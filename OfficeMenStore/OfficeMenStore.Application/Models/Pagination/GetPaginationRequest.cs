﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Pagination
{
    public class GetPaginationRequest
    {
        public int Page { get; set; }
        public int Limit { get; set; }
        public string? Search { get; set; }
        public int? CateId { get; set; } //cate
    }
}

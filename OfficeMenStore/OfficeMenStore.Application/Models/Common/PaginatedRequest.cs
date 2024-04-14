using OfficeMenStore.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Common
{
    public class PaginatedRequest
    {
        public int Page { get; set; }
        public int Limit { get; set; }
        public string? PhoneNumber { get; set; }
        public int? Status { get; set; }
    }
}

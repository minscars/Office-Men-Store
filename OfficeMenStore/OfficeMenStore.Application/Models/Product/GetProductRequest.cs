using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Product
{
    public class GetProductRequest
    {
        public int Page { get; set; }
        public int Limit { get; set; }
        public string? Search { get; set; }
        public int? Key { get; set; } //cate
        public int? Type { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Size
{
    public class UpdateQuantitySizeProductRequest
    {
        public int ProductId { get; set; }
        public int SizeProductId { get; set; }
        public int Quantity { get; set; }
    }
}

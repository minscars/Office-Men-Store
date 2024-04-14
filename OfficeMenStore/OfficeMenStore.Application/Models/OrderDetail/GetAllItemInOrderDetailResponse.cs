using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.OrderDetail
{
    public class GetAllItemInOrderDetailResponse
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductImage { get; set; }
        public string SizeName { get; set; }
        public int SizeId { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public decimal Subtotal { get; set; }
        public bool IsDeleted { get; set; }
    }
}

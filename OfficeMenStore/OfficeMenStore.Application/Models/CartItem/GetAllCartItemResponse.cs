using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.CartItem
{
    public class GetAllCartItemResponse
    {
        public int CartId { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductImage { get; set; }
        public string SizeName { get; set; }
        public int Price { get; set; }
        public int Quanntity { get; set; }
        public int Subtotal { get; set; }
        public bool IsDeleted { get; set; }
     }
}

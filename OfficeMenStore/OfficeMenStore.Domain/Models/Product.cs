using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string? Image { get; set; }
        public string? Name { get; set; }
        public int CategoryId { get; set; }
        public int Price { get; set; }
        public int? Amount_Import { get; set; }
        public int? Amount_Export { get; set; }
        public int? Amount_InStock { get; set; }
        public double Rating { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
        public bool? IsDeleted { get; set; }
        public virtual Category Category { get; set; }
        public virtual List<OrderDetail> OrderDetails { get; set; }
        public virtual List<SizeDetail> SizeDetails { get; set; }
        public virtual List<CartItem> CartItems { get; set; }
    }
}

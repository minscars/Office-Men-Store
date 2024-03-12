using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Models
{
    public class CartItem
    {
        public int CartId { get; set; }
        public int ProductId { get; set; }
        public int SizeProductId { get; set; }
        public int Quanntity {  get; set; }
        public bool IsDeleted { get; set; }
        public virtual Cart Cart { get; set; }
        public virtual Product Product { get; set; }
        public virtual SizeProduct SizeProduct { get; set; }

    }
}

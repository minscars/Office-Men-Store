using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Models
{
    public class SizeProduct
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<SizeDetail> SizeDetails { get; set; }
        public virtual List<CartItem> CartItems { get; set; }
    }
}

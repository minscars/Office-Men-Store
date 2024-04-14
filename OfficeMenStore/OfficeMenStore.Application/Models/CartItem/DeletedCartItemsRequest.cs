using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.CartItem
{
    public class DeletedCartItemsRequest
    {
        public int CartId { get; set; }
        public int ProductId { get; set; }
        public int SizeId { get; set; }
    }
}

using OfficeMenStore.Application.Models.CartItem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Cart
{
    public class GetCartByUserResponse
    {
        public List<GetAllCartItemResponse> CartItemList { get; set; }
        public decimal Total { get; set; }
        public int TotalItems { get; set; }
    }
}

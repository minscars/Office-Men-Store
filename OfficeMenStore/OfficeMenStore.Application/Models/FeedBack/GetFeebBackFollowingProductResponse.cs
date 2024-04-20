using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.FeedBack
{
    public class GetFeebBackFollowingProductResponse
    {
        public int Total { get; set; }
        public decimal Rate { get; set; }
        public List<GetAllFeedBackItemByProductResponse> FeedBackItems { get; set; }
    }
}

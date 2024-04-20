using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.FeedBack
{
    public class GetAllFeedBackItemByProductResponse
    {
        public int FeedBackId { get; set; }
        public string UserId { get; set; }
        public string UserAvatar { get; set; }
        public string UserName { get; set; }
        public int ProductId { get; set; }
        public string? Content { get; set; }
        public double? Rate { get; set; }
        public Boolean? IsDeleted { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}

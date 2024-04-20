using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.FeedBack
{
    public class CreateNewFeedBackRequest
    {
        public string UserId { get; set; }
        public int ProductId { get; set; }
        public string? Content { get; set; }
        public double Rate { get; set; }
        public Boolean? IsDeleted { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}

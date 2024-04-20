using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OfficeMenStore.Application.Models.Size;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Application.Models.Product
{
    public class GetProductResponseModel
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string CategoryName { get; set; }
        public int CategoryId {  get; set; }
        public int TotalProduct {  get; set; }
        public decimal Price { get; set; }
        public int Amount_Import { get; set; }
        public int Amount_Export { get; set; }
        public int Amount_InStock { get; set; }
        public DateTime CreatedTime { get; set; }
        public DateTime UpdatedTime { get; set; }
        public bool? IsDeleted { get; set; }
        public List<GetAllSizeByProductResponse> SizeProducts { get; set; }
    }
}

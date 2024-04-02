using OfficeMenStore.Application.Models.Size;

namespace OfficeMenStore.Application.Models.Product
{
    public class GetProductListResponseModel
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public string CategoryName { get; set; }
        public int Price { get; set; }
        public int? Amount_Import { get; set; }
        public int? Amount_Export { get; set; }
        public int? Amount_InStock { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public bool? IsDeleted { get; set; }
        public List<GetAllSizeByProductResponse> SizeProducts { get; set; }
    }
}

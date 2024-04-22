namespace OfficeMenStore.Application.Models.Order
{
    public class GetAllPromotionResponse
    {
        public string Id { get; set; } = null!;
        public string Code { get; set; } = null!;
        public string? Description { get; set; }
        public string PromotionType { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal LeastValueCondition { get; set; }
        public int? DiscountPercent { get; set; }
        public decimal? MaxDiscount { get; set; }
        public decimal? Discount { get; set; }
        public DateTime? CreatedTime { get; set; }
        public DateTime? UpdatedTime { get; set; }
    }
}

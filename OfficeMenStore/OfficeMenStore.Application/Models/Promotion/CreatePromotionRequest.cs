namespace OfficeMenStore.Application.Models.Promotion
{
    public class CreatePromotionRequest
    {
        public string Code { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal LeastValueCondition { get; set; }
        public int? DiscountPercent { get; set; }
        public decimal? MaxDiscount { get; set; }
        public decimal? Discount { get; set; }
        public string PromotionTypeId { get; set; } = null!;
    }
}

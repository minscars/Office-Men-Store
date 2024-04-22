namespace OfficeMenStore.Domain.Models
{
    public class Promotion
    {
        public string Id { get; set; } = null!;
        public string Code { get; set; } = null!;
        public string? Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal LeastValueCondition { get; set; }
        public int? DiscountPercent { get; set; }
        public decimal? MaxDiscount { get; set; }
        public decimal? Discount { get; set; }
        public string PromotionTypeId { get; set; } = null!;
        public DateTime? CreatedTime { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public bool IsDeleted { get; set; }
        public virtual PromotionType PromotionType { get; set; }
    }
}

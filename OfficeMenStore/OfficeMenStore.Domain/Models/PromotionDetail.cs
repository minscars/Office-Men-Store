namespace OfficeMenStore.Domain.Models
{
    public class PromotionDetail
    {
        public string PromotionId { get; set; } = null!;
        public int OrderId { get; set; }
        public DateTime AppliedTime { get; set; }
        public decimal Discount { get; set; }
        public virtual Promotion Promotion { get; set; }
        public virtual Order Order { get; set; }
    }
}

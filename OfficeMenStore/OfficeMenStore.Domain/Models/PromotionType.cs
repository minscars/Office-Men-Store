namespace OfficeMenStore.Domain.Models
{
    public class PromotionType
    {
        public string Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public DateTime? CreatedTime { get; set; }
        public DateTime? UpdatedTime { get; set; }
        public bool IsDeleted { get; set; }
    }
}

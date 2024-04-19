namespace OfficeMenStore.Application.Models.Statistic
{
    public class GetStatisticResponse
    {
        public int TotalOrder { get; set; }
        public int CustomerAccount { get; set; }
        public int TotalItem { get; set; }
        public List<RevenueResponse>? RevenueResponse { get; set; }
    }
}

using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatisticController : ControllerBase
    {
        private readonly IStatisticService _statisticService;
        public StatisticController(IStatisticService statisticService)
        {
            _statisticService = statisticService;
        }

        [HttpGet("StatisticDetails")]
        public async Task<IActionResult> GetStatisticDetaiAsync()
        {
            var result = await _statisticService.GetStatisticDetailAsync();
            return Ok(result);
        }
    }
}

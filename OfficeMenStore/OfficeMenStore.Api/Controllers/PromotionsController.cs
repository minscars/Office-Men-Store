using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Promotion;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromotionsController : ControllerBase
    {
        private readonly IPromotionService _promotionService;
        public PromotionsController(IPromotionService promotionService)
        {
            _promotionService = promotionService;
        }

        [HttpPost]
        public async Task<IActionResult> CreatePromotionAsync(CreatePromotionRequest request)
        {
            var result = await _promotionService.CreatePromotionAsync(request);
            return Ok(result);
        }

        [HttpPatch]
        public async Task<IActionResult> UpdatePromotionAsync(UpdatePromotionRequest request)
        {
            var result = await _promotionService.UpdatePromotionAsync(request);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePromotionAsync(string id)
        {
            var result = await _promotionService.DeletePromotionAsync(id);
            return Ok(result);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Size;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SizeDetailsController : ControllerBase
    {
        private ISizeProductService _sizeProductService { get; set; }
        public SizeDetailsController(ISizeProductService sizeProductService)
        {
            _sizeProductService = sizeProductService;
        }

        [HttpPost("GetAmountSizeProduct")]
        public async Task<IActionResult> GetAmountSizeProductAsync(GetAmountProductSizeRequest dto)
        {
            var result = await _sizeProductService.GetAmountProductSizeAsync(dto);
            return Ok(result.Data);
        }
    }
}

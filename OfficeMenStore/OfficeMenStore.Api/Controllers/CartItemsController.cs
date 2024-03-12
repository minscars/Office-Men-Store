using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.CartItem;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemsController : ControllerBase
    {
        private readonly ICartItemService _cartItemService;
        public CartItemsController(ICartItemService cartItemService)
        {
            _cartItemService = cartItemService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCartItemAsync([FromBody] CreateCartItemRequest dto)
        {
            var result = await _cartItemService.CreateCartItemAsync(dto);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateQuantityAsync([FromBody] UpdateQuantityCartItemRequest dto)
        {
            var result = await _cartItemService.UpdateQuantityAsync(dto);
            return Ok(result);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetALlCartItemAsync([FromRoute]string userId)
        {
            var result = await _cartItemService.GetAllCartItemAsync(userId);
            return Ok(result);
        }
    }
}

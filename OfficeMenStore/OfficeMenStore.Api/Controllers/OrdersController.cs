using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Order;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;
        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrderAsync([FromBody] CreateOderRequest dto)
        {
            var result = await _orderService.CreateOrderAsync(dto);
            return Ok(result);
        }
    }
}

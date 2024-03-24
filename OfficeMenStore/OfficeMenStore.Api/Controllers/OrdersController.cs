using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Common;
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

        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/users/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrderAsync([FromBody] CreateOderRequest dto)
        {
            var result = await _orderService.CreateOrderAsync(dto);
            return Ok(result);
        }

        [HttpPost("GetAll")]
        public async Task<IActionResult> GetAllOrderAsync(PaginatedRequest requestDto)
        {
            var result = await _orderService.GetAllOrderAsync(requestDto);
            result.Data.ForEach(s => s.CustomerAvatar = setImageName(s.CustomerAvatar));
            return Ok(result);
        }
    }
}

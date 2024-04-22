using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Common;
using OfficeMenStore.Application.Models.Order;
using OfficeMenStore.Domain.Models;

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
        private string setImageNameProduct(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/products/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
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

        [HttpGet("GetOrderByUser/{userId}")]
        public async Task<IActionResult> GetAllOrderByUserAccountAsync(string userId)
        {
            var result = await _orderService.GetAllOrderByUserAccountAsync(userId);
            result.Data.ForEach(s => s.CustomerAvatar = setImageName(s.CustomerAvatar));
            foreach (var item in result.Data)
            {
                item.ListItemOrderDetails.ForEach(s => s.ProductImage = setImageNameProduct(s.ProductImage));
            }
            
            return Ok(result);
        }

        [HttpGet("OrderDetail/{orderId}")]
        public async Task<IActionResult> GetOrderDetailAsync([FromRoute]int orderId)
        {
            var result = await _orderService.GetOrderDetailAsync(orderId);
            result.Data.CustomerAvatar = setImageName(result.Data.CustomerAvatar);
            result.Data.ListItemOrderDetails.ForEach(s => s.ProductImage = setImageNameProduct(s.ProductImage));
            return Ok(result);
        }

        [HttpPut("UpdateOrderStatus")]
        public async Task<IActionResult> UpdateOrderStatusAsync([FromBody] UpdateOrderStatusRequest requestDto)
        {
            var result = await _orderService.UpdateOrderStatusAsync(requestDto);
            return Ok(result);
        }

        [HttpGet("promotions")]
        public async Task<IActionResult> GetAllPromotionAsync()
        {
            var result = await _orderService.GetAllPromotionAsync();
            return Ok(result);
        }

        [HttpGet("GetDetailPromotion/{promotionId}")]
        public async Task<IActionResult> GetDetailPromotionAsync(string promotionId)
        {
            var result = await _orderService.GetDetailPromotion(promotionId);
            return Ok(result);
        }

        [HttpGet("promotions/get-by-condition/{promotionTypeId}/{orderValue}")]
        public async Task<IActionResult> GetAllPromotionAsync(string promotionTypeId, decimal orderValue)
        {
            var result = await _orderService.GetAllPromotionByConditionAsync(promotionTypeId, orderValue);
            return Ok(result);
        }
    }
}

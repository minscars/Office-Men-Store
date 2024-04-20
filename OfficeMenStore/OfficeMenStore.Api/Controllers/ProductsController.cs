using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Product;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/products/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllAsync(int page, int limit)
        {
            var result = await _productService.GetAllAsync(page,limit);
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result);
        }

        [HttpGet("{Id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int Id)
        {
            var result = await _productService.GetProductByIdAsync(Id);
            if (result.StatusCode == 200)
            {
                result.Data.Image = setImageName(result.Data.Image);
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("Category")]
        [AllowAnonymous]
        public async Task<IActionResult> GetByCategoryIdAsync(int page, int limit, int cateId)
        {
            var result = await _productService.GetProductByCategoryIdAsync(page, limit,cateId);
            result.Data.ForEach(s => s.Image = setImageName(s.Image));
            return Ok(result);
        }

        [HttpGet("Search")]
        [AllowAnonymous]
        public async Task<IActionResult> SearchProductByKeyAsync(int page, int limit, string key)
        {
            var result = await _productService.SearchProductByKeyAsync(page,limit,key);
            result.Data.ForEach(s => s.Image = setImageName(s.Image));
            return Ok(result);
        }

        [HttpPost("CreateProduct")]
        [AllowAnonymous]
        public  async Task<IActionResult> CreateProductAsync([FromForm] CreateProductRequest request)
        {
            var result = await _productService.CreateProductAsync(request);
            if (result.StatusCode == 400)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }

        [HttpPut("UpdateProduct")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateProductAsync([FromForm] UpdateProductRequest request)
        {
            var result = await _productService.UpdateProductAsync(request);
            if (result.StatusCode == 400)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }

        [HttpDelete("DeleteProduct/{productId}")]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteProductAsync([FromRoute] int productId)
        {
            var result = await _productService.DeleteProductAsync(productId);
            if (result.StatusCode == 400)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }
    }
}

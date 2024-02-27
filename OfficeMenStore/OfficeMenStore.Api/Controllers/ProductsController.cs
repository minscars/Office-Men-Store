﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using OfficeMenStore.Application.Interfaces;

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
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await _productService.GetAllAsync();
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
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

        [HttpGet("Category/{categoryId}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetByCategoryIdAsync([FromRoute] int categoryId)
        {
            var result = await _productService.GetProductByCategoryIdAsync(categoryId);
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpGet("Search/{key}")]
        [AllowAnonymous]
        public async Task<IActionResult> SearchProductByKeyAsync([FromRoute] string key)
        {
            var result = await _productService.SearchProductByKeyAsync(key);
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }
    }
}

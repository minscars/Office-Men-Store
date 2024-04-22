using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Category;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Application.Services;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/categories/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await _categoryService.GetAllCategoryAsync();
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Image = setImageName(s.Image));
                return Ok(result.Data);
            }
            return BadRequest(result.Message);

        }

        [HttpGet("GetDetailCategory/{cateId}")]
        public async Task<IActionResult> GetDetailCategoryAsync(int cateId)
        {
            var result = await _categoryService.GetDetailCategoryAsync(cateId);
            if (result.StatusCode == 200)
            {
                result.Data.Image = setImageName(result.Data.Image);
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost("CreateCategory")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateCategoryAsync([FromForm] CreateCategoryRequest request)
        {
            var result = await _categoryService.CreateCategoryAsync(request);
            if (result.StatusCode == 400)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }

        [HttpPut("UpdateCategory")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateCategoryAsync([FromForm] UpdateCategoryRequest request)
        {
            var result = await _categoryService.UpdateCategoryAsync(request);
            if (result.StatusCode == 400)
            {
                return BadRequest(result.Message);
            }
            return Ok(result);
        }


    }
}

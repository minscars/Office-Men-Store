using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;

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


    }
}

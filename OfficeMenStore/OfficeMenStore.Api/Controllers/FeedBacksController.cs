using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.FeedBack;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedBacksController : ControllerBase
    {
        private readonly IFeedBackService _feedBackService;
        public FeedBacksController(IFeedBackService feedBackService)
        {
            _feedBackService = feedBackService;
        }

        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/Users/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpPost("AddFeedBack")]
        public async Task<IActionResult> CreateNewFeedBackAsync(CreateNewFeedBackRequest dto)
        {
            var result = await _feedBackService.CreateNewFeedBackAsync(dto);
            return Ok(result);  
        }

        [HttpGet("GetFeebBackFollowingProduct/{productId}")]
        public async Task<IActionResult> GetFeebBackFollowingProductAsync(int productId)
        {
            var result = await _feedBackService.GetFeebBackFollowingProductAsync(productId);
            if(result.StatusCode == 200)
            {
                result.Data.FeedBackItems.ForEach(f => f.UserAvatar = setImageName(f.UserAvatar));
                return Ok(result);
            }
            return Ok(result);
        }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.User;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        private string setImageName(string currentName)
        {
            return String.Format("{0}://{1}{2}/images/Users/{3}", Request.Scheme, Request.Host, Request.PathBase, currentName);
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest request)
        {
            var result = await _userService.LoginAsync(request);
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById([FromRoute] Guid id)
        {
            var result = await _userService.GetUserByIdAsync(id);
            if (result.StatusCode == 200)
            {
                result.Data.Avatar = setImageName(result.Data.Avatar);
                return Ok(result.Data);
            }
            return BadRequest(result.Message);
        }

        [HttpPost("GetAllUser")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllUserAsync(GetAllUserRequest requestDto)
        {
            var result = await _userService.GetAllUserAsync(requestDto);
            if (result.StatusCode == 200)
            {
                result.Data.ForEach(s => s.Avatar = setImageName(s.Avatar));
                
                return Ok(result);
            }
            return BadRequest(result);
        }
    }
}

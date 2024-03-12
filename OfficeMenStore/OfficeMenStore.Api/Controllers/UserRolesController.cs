using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.User;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRolesController : ControllerBase
    {
        private readonly IUserRoleService _userRoleService;
        public UserRolesController(IUserRoleService userRoleService)
        {
            _userRoleService = userRoleService;
        }

        [HttpPost("Create")]
        [AllowAnonymous]
        public async Task<IActionResult> CreateRoleAsync(CreateUserRoleRequest dto)
        {
            var result = await _userRoleService.CreateRoleAsync(dto);
            return Ok(result.Succeeded);
        }
    }
}

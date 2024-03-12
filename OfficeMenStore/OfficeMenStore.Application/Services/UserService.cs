using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.User;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly OfficeMenStoreDbContext _context;
        public UserService(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration configuration,
            OfficeMenStoreDbContext context

        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _context = context;
        }

        public async Task<ApiResult<string>> LoginAsync(LoginRequest request)
        {
            var user = await _userManager.FindByNameAsync(request.UserName);
            if (user == null)
            {
                return new ApiResult<string>(null)
                {
                    Message = "Username is not exist.",
                    StatusCode = 400
                };
            }

            var isPasswordMatched = await _userManager.CheckPasswordAsync(user, request.Password);
            if (!isPasswordMatched)
            {
                return new ApiResult<string>(null)
                {
                    Message = "Password is incorrect.",
                    StatusCode = 400
                };
            }

            var claims = await _userManager.GetClaimsAsync(user);
            return new ApiResult<string>(CreateToken(claims))
            {
                Message = "Login successfully.",
                StatusCode = 200
            };
        }

        private string CreateToken(IEnumerable<Claim> claims)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Tokens:Key"]));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var token = new JwtSecurityToken(
                                   claims: claims,
                                   expires: DateTime.UtcNow.AddDays(1),
                                   signingCredentials: cred
            );
            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;
        }

        public async Task<ApiResult<User>> GetUserByIdAsync(Guid id)
        {
            var user = await _context.Users
                .Where(u => u.Id == id)
                .Select(u => new User()
                {
                    Id = u.Id,
                    Name = u.Name,
                    Avatar = u.Avatar,
                    Email = u.Email,
                    PhoneNumber = u.PhoneNumber,
                }).FirstOrDefaultAsync();
            if (user == null)
            {
                return new ApiResult<User>(null)
                {
                    Message = "Something went wrong",
                    StatusCode = 400
                };
            }

            return new ApiResult<User>(user)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }

}


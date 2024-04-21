using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Address;
using OfficeMenStore.Application.Models.Product;
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

        public async Task<ApiResult<GetUserInformationResponse>> GetUserByIdAsync(Guid id)
        {
            var user = await _context.Users
                .Where(u => u.Id == id)
                .Select(u => new GetUserInformationResponse()
                {
                    UserId = u.Id,
                    Name = u.Name,
                    Avatar = u.Avatar,
                    Email = u.Email,
                    PhoneNumber = u.PhoneNumber,
                    CartId = u.Cart.Id,
                    Addresses = u.Addresses.Select(a => new GetAddressResponse()
                    {
                        Id = a.Id,
                        AddressDetail = a.AddressDetail,
                        IsDeleted = a.IsDeleted,
                        UserId = a.UserId
                    }).ToList(),
                }).FirstOrDefaultAsync();
            if (user == null)
            {
                return new ApiResult<GetUserInformationResponse>(null)
                {
                    Message = "Something went wrong",
                    StatusCode = 400
                };
            }

            return new ApiResult<GetUserInformationResponse>(user)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<PaginatedList<List<GetUserInformationResponse>>> GetAllUserAsync(GetAllUserRequest requestDto)
        {
            var total = await _context.Users.ToListAsync();
            var userList = _context.Users
                .AsQueryable();
            if (!string.IsNullOrEmpty(requestDto.Search))
            {
                userList = userList.Where(u => u.PhoneNumber == requestDto.Search);
                total = await userList.ToListAsync();
            }

            userList = userList.Skip((requestDto.Page) * requestDto.Limit).Take(requestDto.Limit);
            var result = await userList.Select(u => new GetUserInformationResponse()
            {
                UserId = u.Id,
                Name = u.Name,
                Avatar = u.Avatar,
                Email = u.Email,
                PhoneNumber = u.PhoneNumber,
                CartId = u.Cart.Id,
                Addresses = u.Addresses.Select(a => new GetAddressResponse()
                {
                    Id = a.Id,
                    AddressDetail = a.AddressDetail,
                    IsDeleted = a.IsDeleted,
                    UserId = a.UserId,
                }).ToList(),
            }).ToListAsync();

            if (result.Count < 1)
            {
                return new PaginatedList<List<GetUserInformationResponse>>(null);
            }

            return new PaginatedList<List<GetUserInformationResponse>>(result)
            {
                TotalRecord = total.Count(),
                PageNumber =requestDto.Page,
                StatusCode = 200
            };
        }


        public async Task<ApiResult<bool>> RegisterAsync(RegisterRequest request)
        {
            //Check request
            //.....

            //Create new user
            var user = new User { Name = request.Name, UserName = request.Email, Email = request.Email, PhoneNumber = request.Phone };
            var addUserResult = await _userManager.CreateAsync(user, request.Password);

            //Add role for new user
            await _userManager.AddToRoleAsync(user, "User");

            //Add claims for new user
            await _userManager.AddClaimAsync(user, new Claim("id", user.Id.ToString()));
            await _userManager.AddClaimAsync(user, new Claim("email", user.Email));
            await _userManager.AddClaimAsync(user, new Claim("roles", string.Join(",", await _userManager.GetRolesAsync(user))));
            await _userManager.AddClaimAsync(user, new Claim(ClaimTypes.NameIdentifier, user.UserName));
            await _userManager.AddClaimAsync(user, new Claim(ClaimTypes.Email, user.Email));
            await _userManager.AddClaimAsync(user, new Claim(ClaimTypes.Role, string.Join(",", await _userManager.GetRolesAsync(user))));


            var address = new Address()
            {
                AddressDetail = request.Address,
                UserId = user.Id,
            };
            var cart = new Cart()
            {
                UserId = user.Id,
            };
            await _context.Carts.AddAsync(cart);    
            await _context.Addresses.AddAsync(address);
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(addUserResult.Succeeded)
            {
                Message = "",
                StatusCode = 200
            };
        }
    }

}


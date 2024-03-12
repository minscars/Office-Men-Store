using Microsoft.AspNetCore.Identity;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.User;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Services
{
    public class UserRoleService : IUserRoleService
    {
        private readonly RoleManager<UserRole> _roleManager;

        public UserRoleService(RoleManager<UserRole> roleManager)
        {
            _roleManager = roleManager;
        }

        public async Task<IdentityResult> CreateRoleAsync(CreateUserRoleRequest dto)
        {
            return await _roleManager.CreateAsync(new UserRole() { Name = dto.RoleName });
        }
    }
}

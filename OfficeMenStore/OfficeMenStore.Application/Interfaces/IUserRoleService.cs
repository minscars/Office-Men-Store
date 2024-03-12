using Microsoft.AspNetCore.Identity;
using OfficeMenStore.Application.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Interfaces
{
    public interface IUserRoleService
    {
        Task<IdentityResult> CreateRoleAsync(CreateUserRoleRequest dto);
    }
}

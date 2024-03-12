using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.User
{
    public class CreateUserRoleRequest
    {
        public string RoleName { get; set; } = string.Empty;
        public string? Description { get; set; }
    }
}

using Microsoft.AspNetCore.Identity;

namespace OfficeMenStore.Domain.Models
{
    public class User : IdentityUser<Guid>
    {
        public string? Name { get; set; }
        public string? Avatar { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Domain.Enums
{
    public static class StatusEnums
    {
        public enum Status : int
        {
            [Display(Name = "Pending")]
            Pending = 1,
            [Display(Name = "Approve")]
            Approve = 2,
            [Display(Name = "Paid")]
            Paid = 3,
            [Display(Name = "Cash")]
            Cash = 4,
            [Display(Name = "Delivering")]
            Delivering = 5,
            [Display(Name = "Delivered")]
            Delivered = 6,
            [Display(Name = "Rejected")]
            Rejected = 7,
            [Display(Name = "Cancel")]
            Cancel = 8,
        }
        public static string GetDisplayName(Enum enumValue)
        {
            string displayName;
            displayName = enumValue.GetType()
                .GetMember(enumValue.ToString())
                .FirstOrDefault()
                .GetCustomAttribute<DisplayAttribute>()?
                .GetName();
            if (String.IsNullOrEmpty(displayName))
            {
                displayName = enumValue.ToString();
            }
            return displayName;
        }

    }
}

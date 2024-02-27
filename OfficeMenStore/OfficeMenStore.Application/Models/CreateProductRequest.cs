using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models
{
    public class CreateProductRequest
    {
        public string? Name { get; set; }
        public IFormFile? Image { get; set; }
        public int? CategoryId { get; set; }
        public int? Price { get; set; }
        public int? Amount_Import { get; set; }
    }
}

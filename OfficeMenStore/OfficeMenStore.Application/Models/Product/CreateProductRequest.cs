﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Models.Product
{
    public class CreateProductRequest
    {
        public string? Name { get; set; }
        public IFormFile? Image { get; set; }
        public int CategoryId { get; set; }
        public decimal Price { get; set; }
        
    }
}

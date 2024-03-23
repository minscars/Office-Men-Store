using AutoMapper;
using OfficeMenStore.Application.Models.Category;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, GetProductListResponseModel>()
                .ForMember(dto => dto.CategoryName, opt => opt.MapFrom(p => p.Category.Name));
            CreateMap<Product, GetProductResponseModel>().ReverseMap();

            CreateMap<Category, GetAllCategoryResponse>().ReverseMap();

        }

    }
}

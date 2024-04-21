using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Address;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OfficeMenStore.Application.Services
{
    public class AddsressService : IAddressService
    {
        private readonly OfficeMenStoreDbContext _context;
        public AddsressService(OfficeMenStoreDbContext context)
        {
            _context = context;
        }

        public async Task<ApiResult<bool>> CreateAddressAsync(CreateAddressRequest dto)
        {
            if (dto != null)
            {
                var address = new Address()
                {
                    AddressDetail = dto.AddressDetail,
                    UserId = new Guid(dto.UserId),
                };

                await _context.Addresses.AddAsync(address);
                await _context.SaveChangesAsync();

                return new ApiResult<bool>(true)
                {
                    StatusCode = 200,
                    Message = "Add new address successfully!"
                };
            }

            return new ApiResult<bool>(false)
            {
                StatusCode = 400,
                Message = "Something went wrong!"
            };
        }
    }
}

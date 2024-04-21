using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Address;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressesController : ControllerBase
    {
        private readonly IAddressService _addressService;
        public AddressesController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> CreateAddressAsync(CreateAddressRequest dto)
        {
            var result = await _addressService.CreateAddressAsync(dto);
            return Ok(result);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Cart;
using OfficeMenStore.Application.Models.CartItem;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Application.Services
{
    public class CartItemService : ICartItemService
    {
        private readonly OfficeMenStoreDbContext _context;
        public CartItemService(OfficeMenStoreDbContext context)
        {
            _context = context;
        }
        public async Task<ApiResult<bool>> CreateCartItemAsync(CreateCartItemRequest dto)
        {
            if(dto == null)
            {
                return new ApiResult<bool>(false)   
                {
                    Message = "Invalid",
                    StatusCode = 400
                };
            }

            var cartItem = await _context.CartItems
                .Where(c => c.CartId == dto.CartId
                && c.ProductId == dto.ProductId
                && c.SizeProductId == dto.SizeId && c.IsDeleted ==false)
                .Select(c => new CartItem()
                {
                    ProductId = c.ProductId,
                    SizeProductId = c.SizeProductId,
                    CartId = c.CartId,
                    Quantity = c.Quantity
                }).FirstOrDefaultAsync();
            if(cartItem == null)
            {
                var newCartItem = new CartItem()
                {
                    CartId = dto.CartId,
                    ProductId = dto.ProductId,
                    SizeProductId = dto.SizeId,
                    Quantity = dto.Quantity,
                    AddedTime = DateTime.Now

                };
                await _context.CartItems.AddAsync(newCartItem);
                await _context.SaveChangesAsync();
            }
            else
            {
                var newCartItem = new UpdateQuantityCartItemRequest()
                {
                    CartId = dto.CartId,
                    ProductId = dto.ProductId,
                    SizeId = dto.SizeId,
                    Quanntity = dto.Quantity+1
                };
                await UpdateQuantityAsync(newCartItem);
            }
            return new ApiResult<bool>(true)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdateQuantityAsync(UpdateQuantityCartItemRequest dto)
        {
            if (dto == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Invalid",
                    StatusCode = 400
                };
            }

            var cartItem = await _context.CartItems
                .Where(c => c.CartId == dto.CartId
                && c.ProductId == dto.ProductId
                && c.SizeProductId == dto.SizeId)
                .Select(c => new CartItem()
                {
                    ProductId = c.ProductId,
                    SizeProductId = c.SizeProductId,
                    CartId = c.CartId,
                    Quantity = c.Quantity
                }).FirstOrDefaultAsync();
            cartItem.Quantity = dto.Quanntity;
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = "Update amount successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<GetCartByUserResponse>> GetAllCartItemAsync(string userId)
        {
            var listItem = await _context.CartItems
                .Where(c => c.Cart.UserId.ToString() == userId && c.IsDeleted == false)
                .Select(c => new GetAllCartItemResponse()
                {
                    ProductId = c.ProductId,
                    CartId = c.CartId,
                    ProductName = c.Product.Name,
                    ProductImage = c.Product.Image,
                    Price = c.Product.Price,
                    Quantity = c.Quantity,
                    SizeName = c.SizeProduct.Name,
                    Subtotal = c.Quantity * c.Product.Price
                }).ToListAsync();
            var total = listItem.Sum(c => c.Subtotal);
            var cartByUser = new GetCartByUserResponse()
            {
                CartItemList = listItem,
                Total = total,
                TotalItems = listItem.Sum(c => c.Quantity)
            };

            return new ApiResult<GetCartByUserResponse>(cartByUser)
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> DeleteCartItemAsync(DeletedCartItemsRequest dto)
        {
            if (dto == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Invalid",
                    StatusCode = 400
                };
            }

            var cartItem = await _context.CartItems
                .Where(c => c.CartId ==  dto.CartId && c.ProductId == dto.ProductId && c.SizeProductId == dto.SizeId)
                .FirstOrDefaultAsync();
            cartItem.IsDeleted = true;
            await _context.SaveChangesAsync();

            return new ApiResult<bool>(true)
            {
                Message = "Delete product successfully!",
                StatusCode = 200
            };
        }
    }

    
}

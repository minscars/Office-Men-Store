using AutoMapper;
using Azure.Core;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Models.Product;
using OfficeMenStore.Application.Models.Size;
using OfficeMenStore.Application.Utilities.Constants;
using OfficeMenStore.Domain.EF;
using OfficeMenStore.Domain.Models;

namespace OfficeMenStore.Application.Services
{
    public class ProductService : IProductService
    {
        private readonly OfficeMenStoreDbContext _context;
        private readonly IMapper _mapper;
        private readonly IFileService _fileServivce;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public ProductService(OfficeMenStoreDbContext context, IMapper mapper, IFileService fileService, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _mapper = mapper;
            _fileServivce = fileService;
            _webHostEnvironment = webHostEnvironment;
        }

        public async Task<PaginatedList<List<GetProductListResponseModel>>> GetAllAsync(int page, int limit)
        {
            var productList = _context.Products
                .Include(p => p.Category)
                .Where(p => p.IsDeleted == false)
                .OrderByDescending(p =>p.CreatedTime)
                .AsQueryable();

            var total = await _context.Products.Where(p => p.IsDeleted == false).ToListAsync();
            productList = productList.Skip((page) * limit).Take(limit);
            var result = await productList.Select(p => new GetProductListResponseModel()
            {
                Id = p.Id,
                CategoryName = p.Category.Name,
                Name = p.Name,
                Image = p.Image,
                Price = p.Price,
                IsDeleted = false,
                SizeProducts = p.SizeDetails.Select(s => new GetAllSizeByProductResponse()
                {
                    Id = s.SizeProductId,
                    Name = s.SizeProduct.Name,
                    Amount = s.Quantity

                }).ToList(),
                CreatedTime = p.CreatedTime,
            }).ToListAsync();
            
            if (result.Count < 1)
            {
                return new PaginatedList<List<GetProductListResponseModel>>(null);
            }

            return new PaginatedList<List<GetProductListResponseModel>>(result)
            {
                TotalRecord = total.Count(),
                PageNumber = page,
            };

        }

        public async Task<ApiResult<GetProductResponseModel>> GetProductByIdAsync(int id)
        {
            var checkExit = await _context.Products
                .Include(p => p.Category)
                .Where(p => p.Id == id && p.IsDeleted == false)
                .Select(p => new GetProductResponseModel()
                {
                    Id = p.Id,
                    CategoryName = p.Category.Name,
                    CategoryId = p.Category.Id,
                    Name = p.Name,
                    Image = p.Image,
                    Price = p.Price,
                    IsDeleted = false,
                    SizeProducts = p.SizeDetails.Select(s => new GetAllSizeByProductResponse()
                    {
                        Id = s.SizeProductId,
                        Name = s.SizeProduct.Name,
                        Amount = s.Quantity
                        
                    }).ToList(),
                    CreatedTime = p.CreatedTime,
                })
                .FirstOrDefaultAsync();
            checkExit.TotalProduct = checkExit.SizeProducts.Sum(s => s.Amount);
            if (checkExit == null)
            {
                return new ApiResult<GetProductResponseModel>(null)
                {
                    Message = $"Couldn't find the room with id: {id}",
                    StatusCode = 404
                };
            }

            return new ApiResult<GetProductResponseModel>(_mapper.Map<GetProductResponseModel>(checkExit))
            {
                Message = "",
                StatusCode = 200
            };
        }

        public async Task<PaginatedList<List<GetProductListResponseModel>>> GetProductByCategoryIdAsync(int page, int limit, int cateId)
        {
            var productList = _context.Products
                .Include(p => p.Category)
                .Where(p => p.IsDeleted == false && p.CategoryId == cateId)
                .AsQueryable();

            productList = productList.Skip((page) * limit).Take(limit);
            var result = await productList.Select(p => _mapper.Map<GetProductListResponseModel>(p)).ToListAsync();
            var total = await _context.Products.Where(b => b.CategoryId == cateId && b.IsDeleted == false).ToListAsync();
            if (result.Count < 1)
            {
                return new PaginatedList<List<GetProductListResponseModel>>(null);
            }

            return new PaginatedList<List<GetProductListResponseModel>>(result)
            {
                TotalRecord = total.Count(),
                PageNumber = page,
            };
        }

        public async Task<PaginatedList<List<GetProductListResponseModel>>> SearchProductByKeyAsync(int page, int limit, string key)
        {
            var productList = _context.Products
                .Include(p => p.Category)
                .Where(p => p.Name.Trim().ToLower().Contains(key.ToLower()) && p.IsDeleted == false)
                .AsQueryable();
            productList = productList.Skip((page) * limit).Take(limit);
            var result = await productList.Select(p => _mapper.Map<GetProductListResponseModel>(p)).ToListAsync();
            var total = await _context.Products.Where(p => p.Name.Trim().ToLower().Contains(key.ToLower()) && p.IsDeleted == false).ToListAsync();


            if (result.Count < 1)
            {
                return new PaginatedList<List<GetProductListResponseModel>>(null);
            }

            return new PaginatedList<List<GetProductListResponseModel>>(result)
            {
                TotalRecord= total.Count(),
                PageNumber = page,
            };
        }

        public async Task<ApiResult<bool>> CreateProductAsync(CreateProductRequest request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var imageName = await _fileServivce.UploadFileAsync(request.Image, SystemConstant.IMG_PRODUCTS_FOLDER);
            var product = new Product()
            {
                Name = request.Name,
                Image = imageName,
                Price = request.Price,
                CategoryId = request.CategoryId,
                CreatedTime = DateTime.Now,
            };
            await _context.Products.AddAsync(product); 
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = "Create new product successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> UpdateProductAsync(UpdateProductRequest request)
        {
            if (request == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = "Something went wrong!",
                    StatusCode = 400
                };
            }

            var product = await _context.Products
                .Where(p => p.Id == request.Id)
                .FirstOrDefaultAsync();
            if (product == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = $"Couldn't find the product with id: {request.Id}",
                    StatusCode = 404
                };
            }

            if (request.Image == null)
            {
                product.Image = product.Image;
            }
            else
            {
                string path = Path.Combine(_webHostEnvironment.WebRootPath, SystemConstant.IMG_PRODUCTS_FOLDER, product.Image);
                await _fileServivce.RemoveFileAsync(path);
                var imageName = await _fileServivce.UploadFileAsync(request.Image, SystemConstant.IMG_PRODUCTS_FOLDER);
                product.Image = imageName;
            }

            product.Name = request.Name;
            product.Price = (decimal)request.Price;
            product.CategoryId = (int)request.CategoryId;
            product.UpdatedTime = DateTime.Now;

            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = "Update product successfully!",
                StatusCode = 200
            };
        }

        public async Task<ApiResult<bool>> DeleteProductAsync(int productId)
        {
            var product = await _context.Products.Where(p => p.Id == productId).FirstOrDefaultAsync();
            if (product == null)
            {
                return new ApiResult<bool>(false)
                {
                    Message = $"Couldn't find the product with id: {productId}",
                    StatusCode = 404
                };
            }
            product.IsDeleted = true;
            await _context.SaveChangesAsync();
            return new ApiResult<bool>(true)
            {
                Message = $"Delete the product with Id = {productId} successfully!",
                StatusCode = 200
            };
        }
    }
}


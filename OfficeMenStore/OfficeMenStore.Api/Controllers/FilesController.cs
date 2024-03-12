using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OfficeMenStore.Application.Interfaces;
using OfficeMenStore.Application.Services;

namespace OfficeMenStore.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly IFileService _fileService;
        public FilesController(FileService fileService)
        {
            _fileService = fileService;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> UploadImage([FromForm] IFormFile FileUploaded, string folderName)
        {
            var result = await _fileService.UploadFileAsync(FileUploaded, folderName);
            return Ok(result);
        }
    }
}

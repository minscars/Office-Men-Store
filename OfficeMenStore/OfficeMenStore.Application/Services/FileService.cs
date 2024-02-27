using OfficeMenStore.Application.Interfaces;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.Net.Http.Headers;

namespace OfficeMenStore.Application.Services
{
    public class FileService : IFileService
    {
        private readonly IWebHostEnvironment _webHostEnvironment;
        public async Task<string> UploadFileAsync(IFormFile FileUploaded, string folderName)
        {
            try
            {
                if (FileUploaded.Length > 0)
                {
                    string path = Path.Combine(_webHostEnvironment.WebRootPath, folderName);
                    if (!Directory.Exists(path))
                    {
                        Directory.CreateDirectory(path);
                    }
                    var originalFileName = ContentDispositionHeaderValue.Parse(FileUploaded.ContentDisposition).FileName.Trim('"'); 
                    var fileName = $"{Guid.NewGuid()}{Path.GetExtension(originalFileName)}";

                    using (FileStream fileStrem = File.Create(path + fileName))
                    {
                        await FileUploaded.CopyToAsync(fileStrem);
                        await fileStrem.FlushAsync();
                        return fileName;
                    }
                }
                else
                {
                    return string.Empty;
                }
            }

            catch (Exception e)
            {
                return e.Message;
            }
        }
    }
}

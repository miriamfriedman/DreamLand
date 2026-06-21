using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dto_Common_Enteties;
using IBll_Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProudctController : ControllerBase
    {

        IBllProduct c;
        public ProudctController(IBllProduct c)
        {
            this.c = c;

        }

        [HttpGet]
        public async Task<List<productDto>> GetAsync()
        {
          
            return await c.SelectAllAsync();
        }
        [HttpGet("getByCatCode/{catCode}")]
        public async Task<List<productDto>> SelectByCategoryCodeAsync(int catCode)
        {
            return await c.SelectByCategoryCodeAsync(catCode);
        }

        [HttpPost]
        public async Task<productDto> PostAsync(productDto product)
        {

            return await c.AddAsync(product);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<productDto>> GetByIdAsync(int id)
        {
            var product = await c.SelectByIdAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

    }
}

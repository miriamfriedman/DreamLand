
using Dal_Repository.models;
using Dto_Common_Enteties;
using IBll_Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        IBllCart c;
        public CartController(IBllCart c)
        {
            this.c = c;

        }
        [HttpPost("add")]
        public async Task<int> add([FromBody] CartDto cart)
        {
            var r = await c.AddAsync(cart);
            return r;
        }
        [HttpPut("Update")]
        public async Task<CartDto> Update([FromBody] CartDto cart)
        {
            if (cart == null)
            {
                throw new ArgumentNullException(nameof(cart), "Cart cannot be null");
            }
            return await c.UpdateAsync(cart);
        }
    }
}

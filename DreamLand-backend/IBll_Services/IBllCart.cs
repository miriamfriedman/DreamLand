using Dto_Common_Enteties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IBll_Services
{
    public interface IBllCart : IBllServices<IBllCart>
    {
        Task<int> AddAsync(CartDto c);
        Task<CartDto> UpdateAsync(CartDto c);

        Task<CartDto> DeleteAsync(CartDto c);

    }
}

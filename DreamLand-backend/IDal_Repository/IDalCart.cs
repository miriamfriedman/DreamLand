using Dto_Common_Enteties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IDal_Repository
{
    public interface IDalCart<T>
    {
        Task<int> AddAsync(CartDto p);
        Task<int> DeleteAsync(int id);
        Task<CartDto> UpdateAsync(CartDto c);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IBll_Services
{
    public interface IBllServices<T>
    {
        Task<List<T>> SelectAllAsync();
        //Task<List<T>> SelectByCategoryCodeAsync(int id);
        //Task<int> AddAsync(T t);
        //Task<int> UpdateAsync(int id, T t);
        //Task<int> DeleteAsync(int id);
    }
}

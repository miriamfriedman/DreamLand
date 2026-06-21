using Dto_Common_Enteties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IDal_Repository
{
    public interface IDalCustmore<T>
    {
        public Task<List<T>> SelectAllAsync();
        public Task<customerDto> loginAsync(string name, string email, int id);
        public Task<customerDto> AddOrUpdateCustomerAsync(T t);
        //public Task<int> AddAsync(T t);
        //public  Task<int> AddAsync(customerDto customer);
        //Task<List<T>> SelectByCategoryCodeAsync(int catCode);
        //Task<int> UpdateAsync(int id, T t);
        //Task<int> DeleteAsync(int id);
    }
}

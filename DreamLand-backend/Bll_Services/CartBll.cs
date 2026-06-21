using Dto_Common_Enteties;
using IBll_Services;
using IDal_Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll_Services
{
    public class CartBll : IBllCart
    {
        IDalCart<CartDto> dalC;
        public  CartBll(IDalCart<CartDto> c)
        {
            this.dalC = c;
        }
        public Task<List<IBllCart>> SelectAllAsync()
        {
            throw new NotImplementedException();
        }


        public async Task<int> AddAsync(CartDto p)
        {
            if (p.Customer.CustDateOfBirth.Value.Month == DateOnly.FromDateTime(DateTime.Now).Month)
            {
                p.TotalAmount =p.TotalAmount- p.TotalAmount / 10;
            }

                return await dalC.AddAsync(p);
        }

        public async Task<CartDto> UpdateAsync(CartDto c)
        {
            return await dalC.UpdateAsync(c);
        }

        public Task<CartDto> DeleteAsync(CartDto c)
        {
            throw new NotImplementedException();
        }


    }
}

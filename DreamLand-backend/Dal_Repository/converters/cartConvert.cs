using Dal_Repository.models;
using Dto_Common_Enteties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository.converters
{
    public class cartConvert
    {
        public static CartDto cartDto(models.Shop? c)
        {
            CartDto newShop = new CartDto();
            newShop.ShopId = c.ShopId;
            newShop.Customer.CustId = c.CustomerCode;
            newShop.ShopNote = c.ShopNote;
            newShop.TotalAmount = c.TotalAmount;
            //newShop.ShopDate = c.ShopDate;
            return newShop;

        }
        public static List<CartDto> ToListCustomerDto(List<models.Shop> listShop)
        {
            List<CartDto> lnew = new List<CartDto>();
            foreach (models.Shop p in listShop)
            {
                lnew.Add(cartDto(p));
            }
            return lnew;
        }

        public static models.Shop ToShop(CartDto c)
        {
            models.Shop newShop = new models.Shop();
            newShop.ShopId = c.ShopId;
            newShop.CustomerCode = c.Customer.CustId;
            //newShop.ShopDate = c.ShopDate;
            newShop.TotalAmount = c.TotalAmount;
            newShop.ShopNote = c.ShopNote;
            newShop.CustomerCode = c.Customer.CustId;
            return newShop;




        }


    }
}

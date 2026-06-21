using Dal_Repository.converters;
using Dal_Repository.models;
using Dto_Common_Enteties;
using IDal_Repository;
using Microsoft.EntityFrameworkCore;
using static Dal_Repository.CartDal;

namespace Dal_Repository
{
    public class CartDal : IDalCart<CartDto>
    {
        DreamLandContext db;
        public CartDal(DreamLandContext db)
        {
            this.db = db;
        }
        static int i = 5;
        public async Task<int> AddAsync(CartDto c)
        {

            var Shop = new Shop
            {
                ShopId = c.ShopId,
                CustomerCode = c.Customer.CustId,
                ShopDate = DateOnly.FromDateTime(DateTime.Now),
                TotalAmount = c.TotalAmount,
                ShopNote = c.ShopNote
            };
            db.Shops.Add(Shop);
            await db.SaveChangesAsync();
            foreach (var product in c.Products)
            {
                var ShopD = new ShopDetail
                {
                    ShopDetailsId = i++,
                    ShopCode = Shop.ShopId,
                    ProductCode = product.id,
                    Quantity = product.Stack
                };
                var p = await db.Products.FirstOrDefaultAsync(p => p.ProdId == product.id);
                if (p.StockQty < product.Stack)
                {
                    throw new InvalidOperationException("not available");
                }
                p.StockQty -= product.Stack;
                p.LastUpdated = DateOnly.FromDateTime(DateTime.Now);
                db.ShopDetails.Add(ShopD);
            }

            await db.SaveChangesAsync();
            int number = Convert.ToInt32(Shop.TotalAmount);
            return number;
        }

        public Task<int> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<CartDto> UpdateAsync(CartDto c)
        {
            throw new NotImplementedException();
        }

    }
}













//        public async Task<int> UpdateAsync(int Shopid, CartDto c)
//        {
//            var existingShop = await db.Shops.FirstOrDefaultAsync(c => c.ShopId == Shopid);
//            if (existingShop == null)
//                return -1;
//            models.Shop upShop = cartConvert.ToShop(c);
//            existingShop.CustomerCode = upShop.CustomerCode;
//            existingShop.ShopNote = upShop.ShopNote;
//            existingShop.TotalAmount = upShop.TotalAmount;
//            existingShop.ShopDate = upShop.ShopDate;
//            existingShop.ShopId = upShop.ShopId;

//            int result = await db.SaveChangesAsync();
//            return result;
//        }
//        public async Task<int> DeleteAsync(int id)
//        {

//            var c = await db.Shops.FirstOrDefaultAsync(c => c.ShopId == id);
//            if (c == null)
//                return -1;
//            else
//            {
//                db.Shops.Remove(c);
//                int x = await db.SaveChangesAsync();
//                return x;
//            }
//        }

//        public Task<CartDto> UpdateAsync(CartDto c)
//        {
//            throw new NotImplementedException();
//        }
//    }
//}



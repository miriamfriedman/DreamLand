
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Dto_Common_Enteties
{
    public class CartDto
    {
        public int ShopId { get; set; }

        public customerDto? Customer { get; set; }


        public decimal? TotalAmount { get; set; }

        public string? ShopNote { get; set; }

        public p[] Products { get; set; }

    }
}


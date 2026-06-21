import { Category } from "./Category";
import { Company } from "./Company";

export class Product {
    constructor(
        public prodId?: number, 
        public prodName?: string,
        public catCode?: number, 
        public companyCode?: number, 
        public description?: string,
        public lastUpdated?: Date, 
        public price?: number, 
        public image?: string, 
        public stockQty?: number,
        public category?: Category, 
        public company?: Company
    ) { }
}
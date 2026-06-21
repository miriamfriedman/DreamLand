import { Customer } from "./Customer";

export class Cart {
    constructor(
        public shopId:number,
        public customer: Customer, 
        public shopNote: string,
        public products: { id: number, stack: number }[] = [],
        public totalAmount:number
    ) { }
}

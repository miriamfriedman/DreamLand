import { Injectable } from '@angular/core';
import { Product } from '../classes/Product';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../classes/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: any[] = [];
  public cartTotal: number = 0;
  public  i:number = 12;

  constructor(public server: HttpClient) {}
    baseUrl: string = 'https://localhost:7241/api/Cart/add'
    //  ב  identityלא עשיתי ולכן כאן עשיתי משתנהsql
    geti(){
      this.i=this.i+1
     return this.i
    }
    //הוספה לסל אם קיים בסל מוסיף עד רחד לכמות
  addToCart(product:Product) {
    const existingProduct = this.cartItems.find(item => item.prodId === product.prodId);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({...product, quantity: 1});
    }
  }
  
//מחיקת מוצר מהסל
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  // שליפת הסכום לתשלום כולל הנחה!
  getCartTotal(): number {
    this.cartTotal = this.cartItems.reduce((total, item) => {
        console.log(total + (item.price * item.quantity));
        return total + (item.price * item.quantity);
    }, 0);
    return this.cartTotal;
}

//שליפת המערך של העגלת קניות
  getCartItems() {
    return this.cartItems;
  }
  //מחיקת כל המוצרים בעגלה
  clearCart() {
    this.cartItems = [];
  }
  updateCart(updatedCartItems: any[]) {
    this.cartItems = updatedCartItems;
    }
//עידכון הפרטים בשרת
      addAndGetPrice(cart: Cart): void {
        this.server.post<number>(this.baseUrl, cart).subscribe(total => {
            this.cartTotal = total; // כאן אתה מעדכן את cartTotal עם התוצאה
        });
    }



      getCartItemsSummary() {
        return this.cartItems.map(item => ({
            id: item.prodId,
            stack: item.quantity
        }));
    }
}


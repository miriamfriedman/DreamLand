import { Component, NgModule, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CurrencyPipe, Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Cart } from '../../classes/Cart';
import { Customer } from '../../classes/Customer';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule,CurrencyPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {

  constructor(public service: CustomerService, public l: Location,
    private router: Router, public CartS: CartService
  ) { }
  sum: number=0
  showPaymentModal: boolean = false; 
  amount: number = 49.99; 
  paymentDetails = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    amount: this.amount
  };
  ngOnInit() {
    //בדיקה האם קיין משתמש נוכחי ואם לא מעביר להרשמה או התחברות
    if (this.service.currentCustomer.custEmail == undefined) {
      alert('You need to login first');
      this.router.navigate(['login']);
    }
    //בדיקה האם העגלת קניות ריקה ואז מעביר למוצרים
    if (this.CartS.cartItems.length == 0) {
      alert('Your cart is empty');
      this.router.navigate(['home']);
    }
}

//מציג למשתמש את הפרטי תשלום
onCheckout() {
  this.showPaymentModal = true;
}

//ההפך
closeModal() {
  this.showPaymentModal = false;
}
//הקריאת שרת שמעדכנת את הקניה והפרטי קניה
processPayment() {
  this.closeModal();
  const cart = new Cart(
    this.CartS.geti(),
    this.service.currentCustomer,
    "wow",
    this.CartS.getCartItemsSummary(),
    this.CartS.getCartTotal()
);
  this.CartS.addAndGetPrice(cart)
}
}






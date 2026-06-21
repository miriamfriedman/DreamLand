import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink,Routes  } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Output() cartUpdated = new EventEmitter<number>();

  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.cartUpdated.emit(this.cartItems.length); 
    };
  

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
    this.cartUpdated.emit(this.cartItems.length); 
  }

  increaseQuantity(index: number) {
    const product = this.cartItems[index];
    if (product.quantity < product.stockQty) {
      product.quantity++;
      this.cartService.updateCart(this.cartItems);
    } else {
      alert('No hay suficiente stock disponible.');
    }
  }
  
  decreaseQuantity(index: number) {
    const product = this.cartItems[index];
    if (product.quantity > 1) {
      product.quantity--;
      this.cartService.updateCart(this.cartItems);
    }
  }
  

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartService.updateCart(this.cartItems); 
    this.cartUpdated.emit(this.cartItems.length); 
  }
}
import { Component, Input } from '@angular/core';
import { Customer } from '../../classes/Customer';
import { CustomerService } from '../../services/customer.service';
import { Product } from '../../classes/Product';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { ChangeBorderDirective } from '../../dirctive/change-border.directive';
import { ChangeColorDirective } from '../../dirctive/change-color.directive';
import { Router, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, NgClass, ChangeBorderDirective, ChangeColorDirective,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  alls: Array<Customer> = [];
  allP: Array<Product> = [];
  
  //Input מקומפננטת הבית ששם מתבצע השליפה של המוצרים
  @Input() product: Product | undefined;

  constructor(
    public p: ProductService,
    private router:Router,
    public cs:CartService
  ) { }

  //הוספה לסל
  addToCart(p: Product) {
    this.cs.addToCart(p);
  }
  //בלחיצה על התמונה מעביר לפרטים נוספים
  productclick(prodid: number) {
  if (prodid != undefined) {
    this.router.navigate(['/details', prodid]);
  }
  }
}

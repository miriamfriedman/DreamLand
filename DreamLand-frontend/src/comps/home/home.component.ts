import { Component } from '@angular/core';
import { Product } from '../../classes/Product';
import { ProductService } from '../../services/product.service';
import { CardComponent } from '../card/card.component';
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  alls: Array<Product> = [];
  allProducts: Array<Product> = [];
  constructor(public p: ProductService) { }

//בעת טעינת הקומפננטה מתבצע קריאת שרת של שליפת כל המוצרים
  ngOnInit() {
    this.p.getProducts().subscribe(products => {
      this.alls = products;
      this.allProducts = products;
    },
      err => {
        console.log("error");
        console.log(err);

      }
    )
  }
//בעת לחצה על קטגוריה מתבצע שליפה לפי קטגוריה
  onCategoryClick(category: number): void {
    this.p.productsByCatCode(category).subscribe(products => {
      this.alls = products;
    });
  }
//ביטול הסינון לפי קטגוריה
  onShowAllProducts(): void {
    this.alls = this.allProducts;
  }
  //מיון המוצרים לפי המחיר
  onShowSortedProducts(): void {
    this.alls.sort((a, b) => a.price! - b.price!);
}
}

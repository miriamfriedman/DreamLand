
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/Product';
@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {

  id: number = 0;
  ById: Product = new Product();

  constructor(public product: ProductService, public ar: ActivatedRoute) {}

  //idבעת טעינת הפרטים נוספים מתבצע שליפה על פי
  ngOnInit(): void {
    this.ar.params.subscribe(x => {
      console.log(x); 
      this.id = +x['id']; 
      if (this.id) {
        this.getById();
      } else {
        console.error('ID is undefined');
      }
    });
  }

  getById() {
    this.product.getProductById(this.id).subscribe(
      more => {
        this.ById = more;
        console.log("ById: " + JSON.stringify(this.ById));
      },
      err => {
        console.log("error" + err.message);
      }
    );  
  }

}

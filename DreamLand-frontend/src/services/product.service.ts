import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../classes/Customer';
import { Observable } from 'rxjs';
import { Product } from '../classes/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public server: HttpClient) { }
  baseUrl: string = 'https://localhost:7241/api/Proudct'
  allProducts = []
  bool: boolean = false
  //שליפה של כל המוצרים
  getProducts(): Observable<Array<Product>> {
    return this.server.get<Array<Product>>(this.baseUrl);
  }
  //שליפה לפי קוד קטגוריה
  productsByCatCode(catCode: number): Observable<Array<Product>> {
    return this.server.get<Array<Product>>(`${this.baseUrl}/getByCatCode/${catCode}`);
  }
  //שליפה לפי קוד מוצר
  getProductById(id: Number): Observable<Product> {
    return this.server.get<Product>(this.baseUrl+"/"+id);
  }
}










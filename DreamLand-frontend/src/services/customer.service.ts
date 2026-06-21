import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../classes/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(public server: HttpClient) { }
  baseUrl: string = 'https://localhost:7241/api/Customer'
  currentCustomer: Customer = new Customer();
//התחברות
  login(c: Customer): Observable<Customer> {
    var x = this.server.post<Customer>(`${this.baseUrl}/login`, c);
    return x;
  }
  //הרשמה
  register(c: Customer): Observable<Customer> {
    var x = this.server.post<Customer>(`${this.baseUrl}/register`, c);
    return x;

  }
}

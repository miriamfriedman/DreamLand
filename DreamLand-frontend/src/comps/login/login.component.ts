import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../classes/Customer';
import { CustomerService } from '../../services/customer.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(public server: CustomerService , public l:Location) { }
  c: Customer = new Customer()
  showRegistration: boolean = true;

  //בעת לחיצה על הכפתור הוא מציג טופס להרשמה
  showRegistrationForm() {
    this.showRegistration = !this.showRegistration;
  }
//בעת סיום מלוי הטופס הוא מעדכן בעת הצורך בשרת ומעדכן למשתמש הנוכחי
  onSubmit() {
    if (this.showRegistration == true) {
      this.server.login(this.c)
        .subscribe(customer => {
          this.server.currentCustomer = customer;
          this.successMessage = "Login successful!";
          this.l.back();
        },
          e => {
            this.errorMessage = "there was an error";
            this.successMessage = null;
          }
        );
    }
    else if (this.showRegistration == false) {
      this.server.register(this.c)
        .subscribe(
          customer => {
            this.server.currentCustomer = customer;
            this.successMessage = "Registration successful!";
            this.l.back();

          },
          e => {
            this.errorMessage = "there was an error";
            this.successMessage = null;
          });
    }
  }
}

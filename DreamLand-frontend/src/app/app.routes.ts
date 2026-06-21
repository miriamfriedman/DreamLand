import { Routes } from '@angular/router';
import { HomeComponent } from '../comps/home/home.component';
import { LoginComponent } from '../comps/login/login.component';
import { CartComponent } from '../comps/cart/cart.component';
import { InfoComponent } from '../comps/info/info.component';
import { CheckoutComponent } from '../comps/checkout/checkout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent },
    { path: 'details', component: InfoComponent },
    { path: 'details/:id', component: InfoComponent },
    { path: 'cart/checkout', component: CheckoutComponent },
];

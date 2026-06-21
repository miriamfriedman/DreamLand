import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../comps/home/home.component';// import { CategoriesComponent } from '../comps/categories/categories.component';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { WelcomePopupComponent } from "../comps/welcome-popup/welcome-popup.component";
// import { cartComponent } from '../comps/cart/cart.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, WelcomePopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DreamLand';
  @ViewChild(HomeComponent) homeComponent!: HomeComponent;
  constructor(public location: Location, public router: Router) {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe(() => {

    // });
  }
  back1() {
    this.location.back();
  }

}
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-popup',
  imports: [NgClass],
  templateUrl: './welcome-popup.component.html',
  styleUrl: './welcome-popup.component.css'
})
export class WelcomePopupComponent {
  showPopup: boolean = true; // Inicia mostrando el popup

  constructor() {}

  ngOnInit(): void {}

  closePopup(): void {
    this.showPopup = false; 
  }
}

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective {
  private isBorderActive: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
  @HostListener('click') onClick() {
    this.isBorderActive = !this.isBorderActive;
    if (this.isBorderActive) {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    }
  }
}
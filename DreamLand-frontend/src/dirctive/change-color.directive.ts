import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('#e85b54');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('white');
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

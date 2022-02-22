import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highligth]'
})
export class HighligthDirective implements OnChanges {

  defaultColor = 'pink';
  @Input('highligth') bgColor = '';

  constructor(
    private element: ElementRef
  ) {
    this.element.nativeElement.style.backgroundColor = this.defaultColor;
  }

  ngOnChanges(): void {
    this.element.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }

}

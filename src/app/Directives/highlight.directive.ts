import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input('appHighLight') appHighLight = 'blue';

  constructor(public el: ElementRef) {}
  ngOnInit(): void {
    console.log('ngOnInit HighLightDirective', this.appHighLight);
    this.el.nativeElement.style.color = this.appHighLight;
  }
}

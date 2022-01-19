import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  constructor() { }

  @HostListener('focusin')
  @HostListener('mouseenter')
  showTooltip() {

  }

  @HostListener('focusout')
  @HostListener('mouseleave')
  hideTooltip() {

  }

}

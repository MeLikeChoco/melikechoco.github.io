import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[stylesheet]'
})
export class StylesheetDirective implements OnInit {

  constructor(private eleRef: ElementRef<HTMLLinkElement>) { }

  ngOnInit(): void {

    const element = this.eleRef.nativeElement;
    element.rel = 'stylesheet';
    element.type = 'text/css';

  }

}

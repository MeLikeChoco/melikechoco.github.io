import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class LetContext<T> {
  $implicit: T | null = null;
  ngLet: T | null = null;
}

@Directive({
  selector: '[ngLet]',
})
export class LetDirective<T> implements OnInit {

  private _context = new LetContext<T>();

  @Input()
  set ngLet(value: T) {
    this._context.$implicit = this._context.ngLet = value;
  }

  constructor(
    private _vcr: ViewContainerRef,
    private _templateRef: TemplateRef<LetContext<T>>
  ) { }

  ngOnInit(): void {
    this._vcr.createEmbeddedView(this._templateRef, this._context);
  }
  
}

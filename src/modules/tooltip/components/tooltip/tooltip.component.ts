import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  input: string | TemplateRef<any>;

  get tooltipElement() {
    return this._tooltipEleRef.nativeElement;
  }

  get inputAsTemplate() {
    return this.input as TemplateRef<any>;
  }

  constructor(private _tooltipEleRef: ElementRef<HTMLDivElement>) { }

  ngOnInit(): void { }

  inputIsTemplate() {
    return this.input instanceof TemplateRef;
  }

}

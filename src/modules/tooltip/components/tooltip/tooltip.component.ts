import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { DefaultTooltipContent } from '../../tooltipOptions';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CommonModule
  ],
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

  constructor(private _tooltipEleRef: ElementRef<HTMLDivElement>) {
    this.input = DefaultTooltipContent;
  }

  ngOnInit(): void { }

  inputIsTemplate() {
    return this.input instanceof TemplateRef;
  }

}

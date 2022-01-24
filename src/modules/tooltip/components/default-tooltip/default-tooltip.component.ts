import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TooltipService } from '../../services/tooltip/tooltip-service.service';

@Component({
  selector: 'default-tooltip',
  templateUrl: './default-tooltip.component.html',
  styleUrls: ['./default-tooltip.component.scss']
})
export class DefaultTooltipComponent implements OnInit {

  input: string | TemplateRef<any>;

  get tooltipElement() {
    return this._tooltipEleRef.nativeElement;
  }

  get inputAsTemplate() {
    return this.input as TemplateRef<any>;
  }

  constructor(
    private _tooltipEleRef: ElementRef<HTMLDivElement>,
    private _tooltipService: TooltipService
  ) { }

  ngOnInit(): void { }

  inputIsTemplate() {
    return this.input instanceof TemplateRef;
  }

}

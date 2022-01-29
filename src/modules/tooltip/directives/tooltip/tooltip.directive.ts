import { ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../../components/tooltip/tooltip.component';
import { DefaultTooltipContent, getDefaultTooltipOptions, TooltipOptions, TooltipPosition } from '../../tooltipOptions';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnInit, OnDestroy {

  @Input('tooltipContent') content: TemplateRef<any> | string;

  @Input('tooltipOptions')
  set options(options: TooltipOptions) {

    this._tooltipOptions = {
      ...this._tooltipOptions,
      ...options
    }

  }
  get options() {
    return this._tooltipOptions;
  }

  @Input('tooltipPosition')
  set position(position: TooltipPosition) {
    this.options.position = position;
  }
  get position() {
    return this.options.position;
  }

  @Input('tooltipDelay')
  set delay(delay: number) {
    this.options.delay = delay;
  }
  get delay() {
    return this.options.delay;
  }

  @Input('tooltipOffsetInPx')
  set offsetInPx(offset: number) {
    this.options.offsetInPx = offset;
  }
  get offsetInPx() {
    return this.options.offsetInPx;
  }

  get elementRef() {
    return this._elementRef;
  }

  private _tooltipElement: ComponentRef<TooltipComponent> | EmbeddedViewRef<HTMLElement>;
  private _tooltipOptions: TooltipOptions = getDefaultTooltipOptions();

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this._tooltipElement?.destroy();
  }

  @HostListener('mouseenter')
  showTooltip() {

    this.createTooltip();
    this.setupToolTip();

  }

  @HostListener('mouseleave')
  hideTooltip() {

    if (this._tooltipElement instanceof EmbeddedViewRef || this._tooltipElement instanceof ComponentRef)
      this._tooltipElement.destroy();

  }

  private createTooltip() {

    if (!this.content || typeof (this.content) === 'string') {

      const defaultComponent = this._viewContainerRef.createComponent(TooltipComponent);

      if (this.content)
        defaultComponent.instance.input = this.content;

      this._tooltipElement = defaultComponent;

    } else if (this.content instanceof TemplateRef)
      this._tooltipElement = this._viewContainerRef.createEmbeddedView(this.content);

    const viewRef = this._tooltipElement instanceof ComponentRef ?
      (this._tooltipElement.hostView as EmbeddedViewRef<any>) : this._tooltipElement

    viewRef.rootNodes.forEach(node => document.body.appendChild(node));

  }

  private setupToolTip() {

    const element = this._elementRef.nativeElement;
    const tooltipElement = this._tooltipElement instanceof ComponentRef ?
      this._tooltipElement.instance.tooltipElement : this._tooltipElement.context;

    setTimeout(() => {

      const elementRect = element.getBoundingClientRect();
      const toolTipRect = tooltipElement.getBoundingClientRect();
      const toolTipStyle = tooltipElement.style;

      let verticalPos: number, horizontalPos: number;
      verticalPos = horizontalPos = 0;

      switch (this.options.position) {

        case 'top': {

          verticalPos = elementRect.top - toolTipRect.height - this.options.offsetInPx;
          horizontalPos = elementRect.left + (elementRect.width - toolTipRect.width) / 2;

          break;

        }
        case 'right': {

          verticalPos = elementRect.top + (elementRect.height - toolTipRect.height) / 2;
          horizontalPos = elementRect.left + elementRect.width + this.options.offsetInPx;

          break;

        }
        case 'bottom': {

          verticalPos = elementRect.top + elementRect.height + this.options.offsetInPx;
          horizontalPos = elementRect.left + (elementRect.width - toolTipRect.width) / 2;

          break;

        }
        case 'left': {

          verticalPos = elementRect.top + (elementRect.height - toolTipRect.height) / 2;
          horizontalPos = elementRect.left - toolTipRect.width - this.options.offsetInPx;

          break;

        }

      }

      toolTipStyle.top = `${verticalPos}px`;
      toolTipStyle.left = `${horizontalPos}px`;

      tooltipElement.classList.add(`tooltip-${this.options.position}`);
      tooltipElement.classList.add('tooltip-show');

    }, this.options.delay);

    // this._tooltipService.setPosition(
    //   this._elementRef.nativeElement,
    //   tooltipElement,
    //   this.options
    // );

  }

}

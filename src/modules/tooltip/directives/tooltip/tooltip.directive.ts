import { ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { DefaultTooltipComponent } from '../../components/default-tooltip/default-tooltip.component';
import { TooltipService } from '../../services/tooltip/tooltip-service.service';
import { getDefaultTooltipOptions, TooltipOptions, TooltipPosition } from '../../tooltipOptions';

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

  private _tooltipElement: ComponentRef<DefaultTooltipComponent> | EmbeddedViewRef<HTMLElement>;
  private _tooltipOptions: TooltipOptions = getDefaultTooltipOptions();

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _viewContainerRef: ViewContainerRef,
    private _tooltipService: TooltipService
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

      const defaultComponent = this._viewContainerRef.createComponent(DefaultTooltipComponent);

      if (!this.content)
        defaultComponent.instance.input = "This works!";
      else
        defaultComponent.instance.input = this.content;

      this._tooltipElement = defaultComponent;

    } else if (this.content instanceof TemplateRef)
      this._tooltipElement = this._viewContainerRef.createEmbeddedView(this.content);

    const viewRef = this._tooltipElement instanceof ComponentRef ?
      (this._tooltipElement.hostView as EmbeddedViewRef<any>) : this._tooltipElement

    viewRef.rootNodes.forEach(node => document.body.appendChild(node));

  }

  private setupToolTip() {

    const tooltipElement = this._tooltipElement instanceof ComponentRef ?
      this._tooltipElement.instance.tooltipElement : this._tooltipElement.context;

    this._tooltipService.setPosition(
      this._elementRef.nativeElement,
      tooltipElement,
      this.options
    );

  }

}

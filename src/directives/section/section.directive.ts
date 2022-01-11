import { ComponentRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { SectionComponent } from 'src/components/section/section.component';

@Directive({
  selector: '[section]'
})
export class SectionDirective implements OnInit {

  private _sectionUseAltColor = false;
  @Input()
  set sectionUseAltColor(value: boolean) {
    this._sectionUseAltColor = value;
  }

  private sectionRef: ComponentRef<SectionComponent>;

  constructor(
    private contentRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {

    this.sectionRef = this.viewContainerRef.createComponent(SectionComponent);
    this.sectionRef.instance.content = this.contentRef;
    this.sectionRef.instance.useAltColor = this._sectionUseAltColor;

  }

}

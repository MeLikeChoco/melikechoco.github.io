import { ComponentRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { SectionComponent } from 'src/modules/section/components/section/section.component';

@Directive({
  selector: '[section]'
})
export class SectionDirective implements OnInit {

  @Input('sectionUseAltColor')
  set useAltColor(input: boolean) {

    this._useAltColor = input;

    if (this.sectionRef)
      this.sectionRef.instance.useAltColor = input;

  }
  get useAltColor() {
    return this._useAltColor;
  }

  @Input('sectionId')
  set id(input: string) {

    this._id = input;

    if (this.sectionRef)
      this.sectionRef.instance.id = input;

  }
  get id() {
    return this._id;
  }

  @Input('sectionTitle')
  set sectionTitle(input: string) {

    this._title = input;

    if (this.sectionRef)
      this.sectionRef.instance.title = input;

  }
  get sectionTitle() {
    return this._title;
  }

  sectionRef: ComponentRef<SectionComponent>;

  private _useAltColor = false;
  private _id: string;
  private _title = 'Title';

  constructor(
    private _contentRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {

    this.sectionRef = this._viewContainerRef.createComponent(SectionComponent);
    const instance = this.sectionRef.instance;
    instance.content = this._contentRef;
    instance.useAltColor = this._useAltColor;
    instance.id = this._id;
    instance.title = this._title;

  }

}

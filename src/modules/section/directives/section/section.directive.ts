import { ComponentRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { SectionComponent } from 'src/modules/section/components/section/section.component';

@Directive({
  selector: '[section]'
})
export class SectionDirective implements OnInit {

  @Input() sectionUseAltColor = false;
  @Input() sectionId: string;
  @Input() sectionTitle: string;

  private sectionRef: ComponentRef<SectionComponent>;

  constructor(
    private contentRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {

    this.sectionRef = this.viewContainerRef.createComponent(SectionComponent);
    const instance = this.sectionRef.instance;
    instance.content = this.contentRef;
    instance.useAltColor = this.sectionUseAltColor;
    instance.id = this.sectionId;
    instance.title = this.sectionTitle;

  }

}

import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input() content: TemplateRef<any>;

  useAltColor = false;

  constructor() { }

}

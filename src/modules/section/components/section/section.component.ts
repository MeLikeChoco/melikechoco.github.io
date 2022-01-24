import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() content: TemplateRef<any>;
  @Input() id: string;
  @Input() useAltColor = false;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void { }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from 'src/modules/section/components/section/section.component';
import { SectionDirective } from 'src/modules/section/directives/section/section.directive';



@NgModule({
  imports: [
    SectionComponent,
    SectionDirective,
    CommonModule
  ],
  exports: [
    SectionDirective
  ]
})
export class SectionModule { }

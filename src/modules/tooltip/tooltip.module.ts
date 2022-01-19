import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from 'src/modules/tooltip/directives/tooltip/tooltip.directive';



@NgModule({
  declarations: [
    TooltipDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective
  ]
})
export class TooltipModule { }

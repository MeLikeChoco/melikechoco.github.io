import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from 'src/modules/tooltip/directives/tooltip/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipService } from './services/tooltip/tooltip-service.service';



@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective
  ],
  providers: [
    TooltipService
  ]
})
export class TooltipModule { }

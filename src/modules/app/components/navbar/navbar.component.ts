import { Component, OnInit } from '@angular/core';
import { TooltipDirective } from 'src/modules/tooltip/directives/tooltip/tooltip.directive';

@Component({
  imports: [
    TooltipDirective
  ],
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

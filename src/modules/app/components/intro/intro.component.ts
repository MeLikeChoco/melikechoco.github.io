import { Component, OnInit } from '@angular/core';

type IntroComponentStyle = {
  "background-color": string;
};

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true
})
export class IntroComponent implements OnInit {

  style: IntroComponentStyle | undefined;

  constructor() {

  }

  ngOnInit(): void {

    let x = Math.round(0xffffff * Math.random()).toString(16);
    let y = (6 - x.length);
    let z = '000000';
    let backgroundColor = '#' + z.substring(0, y) + x;

    this.style = {
      'background-color': backgroundColor
    }

  }

}

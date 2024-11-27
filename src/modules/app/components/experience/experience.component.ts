import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import experiences from '../../../../assets/experience.json';
import { CommonModule } from '@angular/common';

@Component({
  imports:[
    CommonModule
  ],
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  standalone: true
})
export class ExperienceComponent implements OnInit {

  @ViewChild('experienceNavGlider') glider: ElementRef<HTMLDivElement> | undefined;

  experiences = experiences;
  employers = experiences.reverse().map(experience => experience.employer);
  activeTab = 0;

  constructor() { }

  ngOnInit(): void {
  }

  navtabClicked = (tabIndex: number) => {

    if (!this.glider)
      return;

    this.glider.nativeElement.style.transform = `translateY(${tabIndex * 100}%)`;
    this.activeTab = tabIndex;

  }

}

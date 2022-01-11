import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import experiences from '../../assets/experience.json';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
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

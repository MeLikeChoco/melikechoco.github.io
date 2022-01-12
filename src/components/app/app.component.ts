import { AfterViewChecked, Component, ElementRef } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ExperienceComponent } from '../experience/experience.component';
import { AppFooterComponent } from '../footer/app-footer.component';
import { IntroComponent } from '../intro/intro.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent implements AfterViewChecked {

  intro = IntroComponent;
  skills = SkillsComponent;
  footer = AppFooterComponent;
  experience = ExperienceComponent;
  projects = ProjectsComponent;
  aboutMe = AboutMeComponent;

  constructor(private element: ElementRef<HTMLElement>) {

  }

  ngAfterViewChecked(): void {

    const links = [...this.element.nativeElement.getElementsByTagName('a')].filter(element => element.rel != 'noreferrer');

    if (links.length != 0)
      links.forEach(element => element.rel = 'noreferrer');

  }

}

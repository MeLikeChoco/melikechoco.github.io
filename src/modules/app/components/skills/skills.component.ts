import { Component } from '@angular/core';
import skills from '../../../../assets/skills.json'
import { CommonModule } from '@angular/common';
import { InViewDirective } from '../../directives/in-view/in-view.directive';

@Component({
  imports: [
    CommonModule,
    InViewDirective
  ],
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true
})
export class SkillsComponent {

  enableLanguages = true;
  enableFrameworks = false;
  enableOthers = false;
  skills = skills;

  constructor() { }

  animateSkill = (element: HTMLElement) => element.classList.add('fade-in-slide-up');

  identify(index: number, skill: { name: string, image: string }) {
    return skill.name;
  }

}

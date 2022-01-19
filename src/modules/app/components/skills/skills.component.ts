import { Component } from '@angular/core';
import skills from '../../../../assets/skills.json'

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
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

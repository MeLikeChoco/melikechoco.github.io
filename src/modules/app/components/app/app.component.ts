import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgcCookieConsentModule, NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThemingComponent } from '../theming/theming.component';
import { IntroComponent } from '../intro/intro.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { AppFooterComponent } from '../footer/app-footer.component';
import { cookieConsentConfig } from 'src/misc';

@Component({
  imports:[
    NavbarComponent,
    ThemingComponent,
    IntroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutMeComponent,
    AppFooterComponent
  ],
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
  standalone: true
})
export class AppComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('navLinksGlider') navLinksGlider: ElementRef<HTMLDivElement>

  private tabToIndex: { [id: string]: number } = {};
  private navRadios: HTMLInputElement[];

  constructor(
    private element: ElementRef<HTMLElement>,
    private ccService: NgcCookieConsentService
  ) { }

  ngAfterViewInit(): void {

    [...this.element.nativeElement.getElementsByTagName('label')].forEach((element, index) => {

      element.addEventListener('click', this.labelClicked.bind(this));

      this.tabToIndex[element.htmlFor] = index;

    });

    this.navRadios = [...this.element.nativeElement.getElementsByTagName('input')];

  }

  ngAfterViewChecked(): void {

    const links = [...this.element.nativeElement.getElementsByTagName('a')].filter(element => element.rel != 'noreferrer');

    if (links.length != 0)
      links.forEach(element => element.rel = 'noreferrer');

  }

  labelClicked(event: MouseEvent) {

    const targetParent = (<HTMLElement>event.target).parentElement;

    if (targetParent instanceof HTMLLabelElement) {

      const index = this.tabToIndex[targetParent.htmlFor];

      this.moveGlider(index);

    }

  }

  moveGlider(index: number) {

    // this.navLinksGlider.nativeElement.style.transform = `translateX(${100 * index}%)`;
    this.navRadios[index].checked = true;

  }

}

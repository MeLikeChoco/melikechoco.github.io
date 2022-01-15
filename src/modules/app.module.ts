import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

import { AppComponent } from '../components/app/app.component';
import { IntroComponent } from 'src/components/intro/intro.component';
import { SkillsComponent } from 'src/components/skills/skills.component';
import { AppFooterComponent } from 'src/components/footer/app-footer.component';
import { InViewDirective } from 'src/directives/in-view/in-view.directive';
import { ExperienceComponent } from 'src/components/experience/experience.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { GithubService } from 'src/services/github-service/github.service';
import { SectionDirective } from 'src/directives/section/section.directive';
import { SectionComponent } from 'src/components/section/section.component';
import { LoadingDirective } from 'src/directives/loading/loading.directive';
import { LetDirective } from 'src/directives/let/let.directive';
import { AboutMeComponent } from 'src/components/about-me/about-me.component';
import { ThemingComponent } from 'src/components/theming/theming.component';
import { StylesheetDirective } from 'src/directives/stylesheet/stylesheet.directive';
import { SafePipe } from 'src/pipes/safe/safe.pipe';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ThemesService } from 'src/themes/themes/themes.service';

const cookieConsentConfig: NgcCookieConsentConfig = {
  "cookie": {
    "domain": environment.production ? "melikechoco.github.io" : "localhost"
  },
  "position": "bottom-left",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#000000",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#f1d600",
      "text": "#000000",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "The only cookie we use is for site theming purposes.",
    "dismiss": "Got it!",
    "deny": "Refuse cookies",
    "link": "Learn more",
    "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ThemingComponent,
    IntroComponent,
    SectionComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutMeComponent,
    AppFooterComponent,
    InViewDirective,
    SectionDirective,
    LoadingDirective,
    LetDirective,
    StylesheetDirective,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgcCookieConsentModule.forRoot(cookieConsentConfig)
  ],
  providers: [
    GithubService,
    CookieService,
    ThemesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
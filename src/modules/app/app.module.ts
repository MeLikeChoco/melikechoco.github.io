import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';

import { AppComponent } from './components/app/app.component';
import { IntroComponent } from 'src/modules/app/components/intro/intro.component';
import { SkillsComponent } from 'src/modules/app/components/skills/skills.component';
import { AppFooterComponent } from 'src/modules/app/components/footer/app-footer.component';
import { InViewDirective } from 'src/modules/app/directives/in-view/in-view.directive';
import { ExperienceComponent } from 'src/modules/app/components/experience/experience.component';
import { ProjectsComponent } from 'src/modules/app/components/projects/projects.component';
import { GithubService } from 'src/modules/app/services/github-service/github.service';
// import { LoadingDirective } from 'src/modules/app/directives/loading/loading.directive';
import { AboutMeComponent } from 'src/modules/app/components/about-me/about-me.component';
import { ThemingComponent } from 'src/modules/app/components/theming/theming.component';
import { StylesheetDirective } from 'src/modules/app/directives/stylesheet/stylesheet.directive';
import { SafePipe } from 'src/pipes/safe/safe.pipe';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ThemesService } from 'src/modules/app/services/themes/themes.service';
import { NavbarComponent } from 'src/modules/app/components/navbar/navbar.component';
import { SectionModule } from '../section/section.module';
import { KeyValueKeepOrderPipe } from 'src/pipes/keyValueKeepOrder/key-value-keep-order.pipe';
import { TooltipModule } from '../tooltip/tooltip.module';
import { cookieConsentConfig } from 'src/misc';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemingComponent,
    IntroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutMeComponent,
    AppFooterComponent,
    InViewDirective,
    // LoadingDirective,
    StylesheetDirective,
    SafePipe,
    KeyValueKeepOrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgcCookieConsentModule.forRoot(cookieConsentConfig),
    SectionModule,
    TooltipModule
  ],
  providers: [
    GithubService,
    CookieService,
    ThemesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
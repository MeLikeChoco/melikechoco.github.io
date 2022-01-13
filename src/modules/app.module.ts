import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

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

@NgModule({
  declarations: [
    AppComponent,
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
    LetDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
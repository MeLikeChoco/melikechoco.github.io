// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { NgcCookieConsentModule } from 'ngx-cookieconsent';

// import { AppComponent } from './components/app/app.component';
// import { GithubService } from 'src/modules/app/services/github-service/github.service';
// import { FormsModule } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';
// import { ThemesService } from 'src/modules/app/services/themes/themes.service';
// import { SectionModule } from '../section/section.module';
// import { TooltipModule } from '../tooltip/tooltip.module';
// import { cookieConsentConfig } from 'src/misc';

// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     NgcCookieConsentModule.forRoot(cookieConsentConfig),
//     SectionModule,
//     TooltipModule
//   ],
//   providers: [
//     GithubService,
//     CookieService,
//     ThemesService,    
//     provideHttpClient(withInterceptorsFromDi()),
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
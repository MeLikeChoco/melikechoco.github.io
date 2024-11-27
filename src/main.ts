import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './modules/app/components/app/app.component';
import { provideNgcCookieConsent } from 'ngx-cookieconsent';
import { cookieConsentConfig } from './misc';
import { GithubService } from './modules/app/services/github-service/github.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ThemesService } from './modules/app/services/themes/themes.service';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideNgcCookieConsent(cookieConsentConfig),    
    CookieService,
    GithubService,
    ThemesService
  ]
})
  .catch(err => console.error(err));
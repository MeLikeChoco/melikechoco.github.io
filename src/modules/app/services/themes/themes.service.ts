import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import themesJson from 'src/assets/themes.json';

const themeKey = 'theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private _themeKeys = Object.keys(themesJson);
  private _activeTheme: string;

  themes = themesJson;

  get activeTheme() {
    return this._activeTheme;
  }

  set activeTheme(theme: string) {

    if (this._themeKeys.includes(theme)) {

      this._activeTheme = theme;

      if (this._ccService.hasConsented())
        this._cookieService.set(themeKey, theme);

    } else
      throw new Error(`${theme} is not a valid theme key, check themes to make sure they match.`);

  }

  constructor(
    private _cookieService: CookieService,
    private _ccService: NgcCookieConsentService
  ) {

    let theme = _cookieService.get(themeKey);

    if (theme === '')
      theme = this._themeKeys[0];

    this._activeTheme = theme;

  }

}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import themes from 'src/assets/themes.json';

const themeKey = 'theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private _themeKeys = Object.keys(themes);

  themes = themes;
  activeTheme: string;

  constructor(private cookieService: CookieService) {

    this.activeTheme = cookieService.get(themeKey);

    if (this.activeTheme === '')
      this.activeTheme = this._themeKeys[0];

  }

  changeTheme(event: Event) {

    const selectElement = event.target;

    if (selectElement && selectElement instanceof HTMLSelectElement) {

      const activeTheme = this._themeKeys[selectElement.selectedIndex];

      this.cookieService.set(themeKey, activeTheme);

    }

  }

}

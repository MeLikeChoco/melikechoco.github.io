import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentModule, NgcCookieConsentService } from 'ngx-cookieconsent';
import { cookieConsentConfig } from 'src/misc';
import themes from 'src/assets/themes.json';
import { ThemesService } from './themes.service';

describe('ThemesService with cookie consent', () => {

  const themeCookieKey = 'theme';
  const themeKeys = Object.keys(themes);
  const themeMap = Object.entries(themes)
    .reduce<Map<string, string>>((map, entry) => map.set(entry[0], entry[1]), new Map());

  let themesService: ThemesService;
  let cookieService: CookieService;

  beforeAll(() => {
    jest.spyOn(NgcCookieConsentService.prototype, 'hasConsented').mockReturnValue(true);
  });

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ThemesService,
        CookieService
      ],
      imports: [
        NgcCookieConsentModule.forRoot(cookieConsentConfig)
      ]
    });

    themesService = TestBed.inject(ThemesService);
    cookieService = TestBed.inject(CookieService);

  });

  it('should be created', () => {
    expect(themesService).toBeTruthy();
    expect(themesService.activeTheme).toBeTruthy();
  });

  it('should should throw error', () => {
    expect(() => themesService.activeTheme = 'this').toThrowError();
  });

  it('should accept theme', () => {

    themeKeys.forEach(key => {

      expect(() => themesService.activeTheme = key).not.toThrowError();
      expect(themesService.activeTheme).toBe(key);
      expect(cookieService.get(themeCookieKey)).toBe(key);

    });

  });

});

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { ThemesService } from 'src/modules/app/services/themes/themes.service';

@Component({
  selector: 'theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss']
})
export class ThemingComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('themeSelection') themeSelection: ElementRef<HTMLSelectElement>

  get themesService() {
    return this._themesService;
  }

  private _onConsentSub$: Subscription

  constructor(
    private _ccService: NgcCookieConsentService,
    private _themesService: ThemesService
  ) { }

  ngOnInit(): void {

    if (!this._ccService.hasAnswered()) {

      this._onConsentSub$ = this._ccService.statusChange$.subscribe(event => {

        switch (event.status) {

          case 'allow':
            this.initializeThemeChanging();
            break;

        }

      });

    }

  }

  ngAfterViewInit(): void {

    if (this._ccService.hasConsented())
      this.initializeThemeChanging();

  }

  ngOnDestroy(): void {
    this._onConsentSub$?.unsubscribe();
  }

  initializeThemeChanging() {
    this.themeSelection.nativeElement.addEventListener('change', (ev) => this.themesService.changeTheme(ev));
  }

  preserveOrder() {
    return 0;
  }

}

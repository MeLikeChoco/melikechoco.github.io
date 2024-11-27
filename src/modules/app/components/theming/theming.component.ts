import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { ThemesService } from 'src/modules/app/services/themes/themes.service';
import { KeyValueKeepOrderPipe } from 'src/pipes/keyValueKeepOrder/key-value-keep-order.pipe';
import { SafePipe } from 'src/pipes/safe/safe.pipe';
import { StylesheetDirective } from '../../directives/stylesheet/stylesheet.directive';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    KeyValueKeepOrderPipe,
    SafePipe,
    StylesheetDirective
  ],
  selector: 'theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss'],
  standalone: true
})
export class ThemingComponent implements OnInit, OnDestroy {

  @ViewChild('themeSelection') themeSelection: ElementRef<HTMLSelectElement>

  get themesService() {
    return this._themesService;
  }

  private _onConsentSub$: Subscription

  constructor(
    private _themesService: ThemesService,
    private _ccService: NgcCookieConsentService
  ) { }

  ngOnInit(): void {

    if (!this._ccService.hasAnswered()) {

      this._onConsentSub$ = this._ccService.statusChange$.subscribe(event => {

        switch (event.status) {

          case 'dismiss':

            if (this._ccService.hasConsented()) {

              const selectedTheme = this.themeSelection.nativeElement.selectedOptions.item(0)?.value;

              if (selectedTheme)
                this._themesService.activeTheme = selectedTheme;

            }

            break;

        }

      });

    }

  }

  ngOnDestroy(): void {
    this._onConsentSub$?.unsubscribe();
  }

  preserveOrder() {
    return 0;
  }

}

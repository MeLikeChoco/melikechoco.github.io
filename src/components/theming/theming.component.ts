import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { ThemesService } from 'src/themes/themes/themes.service';
import themes from '../../assets/themes.json';

@Component({
  selector: 'theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss']
})
export class ThemingComponent implements OnInit, OnDestroy {

  themesService: ThemesService;

  private _onConsentSub$: Subscription

  constructor(
    private _ccService: NgcCookieConsentService,
    private _themesService: ThemesService
  ) {
    this.themesService = _themesService;
  }

  ngOnInit(): void {

    this._ccService.statusChange$.subscribe(event => {

      switch (event.status) {

        case 'allow': {

        }

      }

    });

  }

  ngOnDestroy(): void {
    this._onConsentSub$.unsubscribe();
  }

  preserveOrder() {
    return 0;
  }

}

import { Directive, ElementRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';

@Directive({
  selector: '[loading]'
})
export class LoadingDirective implements OnInit {

  @Input() toLoad: Observable<any>;
  @Input() classDuringLoading: string = 'loading';

  constructor(private _element: ElementRef<HTMLElement>) { }

  ngOnInit(): void {

    this._element.nativeElement.classList.add(this.classDuringLoading);

    this.toLoad
      .subscribe(value => {

        if (value)
          this._element.nativeElement.classList.remove(this.classDuringLoading);

      });

  }

}

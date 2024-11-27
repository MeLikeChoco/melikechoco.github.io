import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { filter, Subject } from 'rxjs';

@Directive({
  selector: '[in-view]',
  standalone: true
})
export class InViewDirective implements OnInit, OnDestroy, AfterViewInit {

  @Input('inViewThreshold') threshold = 0.5;
  
  @Output() inView = new EventEmitter<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();

  constructor(private element: ElementRef) { }

  ngOnInit(): void {

    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: this.threshold
    }

    this.observer = new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting || entry.intersectionRatio > 0)
          this.subject.next({
            entry, observer
          });

      });

    }, options);

  }

  ngAfterViewInit(): void {
    this.startObserver();
  }

  ngOnDestroy(): void {

    if (this.observer) {

      this.observer.disconnect();

      this.observer = undefined;

    }

    this.subject.complete();

  }

  private startObserver(): void {

    if (!this.observer)
      return;

    this.observer.observe(this.element.nativeElement);
    this.subject
      .pipe(filter(Boolean))
      .subscribe(({ entry, observer }) => {

        this.inView.emit(entry.target as HTMLElement);
        observer.unobserve(entry.target);

      });

  }

}

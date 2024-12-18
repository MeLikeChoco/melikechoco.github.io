import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TooltipComponent } from '../../components/tooltip/tooltip.component';
import { getDefaultTooltipOptions, TooltipPosition } from '../../tooltipOptions';
import { TooltipDirective } from './tooltip.directive';
// import { it } from '@jest/globals';

describe('TooltipDirective', () => {

  const delays = [
    100,
    300,
    500,
    1000
  ];

  const positions: TooltipPosition[] = [
    'bottom',
    // 'left',
    // 'right',
    // 'top'
  ];

  const defaultOptions = getDefaultTooltipOptions();

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: TooltipDirective;
  let testElement: DebugElement;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        TestComponent,
        TooltipComponent,
        TooltipDirective
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    testElement = fixture.debugElement.query(By.css("#enter-here"));

    fixture.detectChanges();
    await fixture.whenStable();

    directive = component.directive;

  });

  it('should create an instance', () => {

    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
    expect(directive).toBeTruthy();
    expect(directive.options).toEqual(defaultOptions);

  });

  //used 'test' instead of 'it' because of https://github.com/angular/angular/issues/47603
  test.each([
    100,
    300,
    500,
    1000
  ])('should show (on mouseenter) and hide (on mouseleave) tooltip with %dms delay', fakeAsync(async (delay: number) => {

    directive.delay = delay;

    testElement.triggerEventHandler('mouseenter', {});
    tick(delay);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(document.querySelector('.tooltip-default')).toBeTruthy();

    testElement.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();

    expect(document.querySelector('.tooltip-default')).toBeNull();

  }));

  // positions.forEach(position => {

  //   it(`should show tooltip with class "tooltip-${position}"`, fakeAsync(async () => {

  //     const testEleRectMock = jest.spyOn(directive.elementRef.nativeElement, 'getBoundingClientRect').mockReturnValue({
  //       top: 800,
  //       left: 800,
  //       width: 48,
  //       height: 48
  //     } as DOMRect);

  //     directive.position = position;

  //     testElement.triggerEventHandler('mouseenter', {});
  //     tick(defaultOptions.delay);
  //     fixture.detectChanges();
  //     await fixture.whenStable();

  //     const tooltipEle = document.querySelector<HTMLElement>(`.tooltip-${position}`);

  //     expect(tooltipEle).toBeTruthy();

  //     const testEleRect = directive.elementRef.nativeElement.getBoundingClientRect();
  //     const tooltipRect = tooltipEle?.getBoundingClientRect();

  //     expect(tooltipRect?.top).toBeGreaterThan(testEleRect.top);
  //     testEleRectMock.mockClear();

  //   }));

  // });

});

@Component({
  imports: [
    TooltipDirective
  ],
  template: `
    <div id="enter-here" tooltip></div>
  `
})
class TestComponent {
  @ViewChild(TooltipDirective) directive: TooltipDirective;
}
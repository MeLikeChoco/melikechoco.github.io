import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InViewDirective } from './in-view.directive';

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: (element: any) => null,
  disconnect: () => null
}));

describe('IntersectionObservableDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: InViewDirective;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        InViewDirective
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    directive = component.directive;

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(directive).toBeTruthy();
  });
});

@Component({
  template: `
    <div id="test" in-view></div>
  `
})
class TestComponent {

  @ViewChild(InViewDirective) directive: InViewDirective;

  constructor() { }

}
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StylesheetDirective } from './stylesheet.directive';

describe('StylesheetDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        StylesheetDirective
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(component.directive).toBeTruthy();
  });

  it('should apply element.rel="stylesheet" and element.type="text/css"', () => {

    let element = fixture.debugElement.query(By.css('#test')).nativeElement as HTMLLinkElement;

    expect(element.rel).toBe('stylesheet');
    expect(element.type).toBe('text/css');

  });

});

@Component({
  template: `
    <div>
      <link id="test" stylesheet />
    </div>
  `
})
class TestComponent {

  @ViewChild(StylesheetDirective) directive: StylesheetDirective;

  constructor() { }

}

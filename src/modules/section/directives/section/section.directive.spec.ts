import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SectionComponent } from '../../components/section/section.component';
import { SectionDirective } from './section.directive';
import { it } from '@jest/globals';

const backgroundColor = 'white';
const backgroundColorAlt = 'black';

describe('SectionDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: SectionDirective;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [
        TestComponent,
        SectionComponent,
        SectionDirective
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();

    directive = component.directive;

  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should create section with TestComponent in it', () => {
    expect(fixture.debugElement.query(By.css('#test'))).toBeTruthy();
  });

  it.each([
    'weight',
    'village',
    'shadow'
  ])('should create section with id "%s"', id => {

    directive.id = id;

    fixture.detectChanges();

    expect(document.querySelector('#test')).toBeTruthy();

  });

  it('should apply correct class based on useAltColor', () => {

    const section = fixture.debugElement.query(By.css('.section'));
    directive.useAltColor = false;

    fixture.detectChanges();

    expect(section.classes['section']).toBe(true);

    directive.useAltColor = true;

    fixture.detectChanges();

    expect(section.classes['section-alt']).toBe(true);

  });

  [
    'credit',
    'date',
    'wardrobe'
  ].forEach(title => {

    it(`should create section with title "${title}"`, () => {

      const section = fixture.debugElement.query(By.css('.section'));
      directive.sectionTitle = title;

      fixture.detectChanges();

      expect(section.query(By.css('.section-title')).nativeElement.textContent).toBe(title);

    });

  });

});

@Component({
  imports: [
    SectionDirective
  ],
  template: `
    <div id="test" *section>{{input}}</div>
  `
})
class TestComponent {

  @ViewChild(SectionDirective) directive: SectionDirective;

  input: string;

  constructor() { }

}

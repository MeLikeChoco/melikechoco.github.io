import { KeyValue } from '@angular/common';
import { Component, KeyValueDiffers } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { KeyValueKeepOrderPipe } from './key-value-keep-order.pipe';

let pipe: KeyValueKeepOrderPipe;

describe('KeyValueKeepOrderPipe isolated', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [KeyValueDiffers, KeyValueKeepOrderPipe]
    });

    pipe = TestBed.inject(KeyValueKeepOrderPipe);

  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  [
    {
      name: 'unordered letters',
      content: { 'l': 0, 's': 0, 'f': 0, 'd': 0, 'm': 0, 'x': 0, 'q': 0 }
    },
    {
      name: 'unordered numbers',
      content: { 93: 0, 15: 0, 49: 0, 27: 0, 65: 0, 71: 0, 47: 0, 11: 0, 92: 0, 48: 0 }
    }
  ].forEach(params => {

    it(`should preserve order of ${params.name}`, () => {

      const objectToKVArray = (object: any) => {
        return Object.entries(object)
          .reduce((accumulator, kv) => {
            accumulator.push({ key: kv[0], value: 0 });
            return accumulator;
          }, [] as KeyValue<any, 0>[]);
      }

      const expected = objectToKVArray(params.content);
      const actual = pipe.transform(params.content);

      expect(actual).toEqual(expected);

    });

  });

});

describe('KeyValueKeepOrderPipe in component', () => {

  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        KeyValueKeepOrderPipe
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);

  });

  it('should create an instance', () => {
    expect(fixture).toBeTruthy();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should create an instance with list of unordered numbers', () => {

    const expected = { 93: 0, 15: 0, 49: 0, 27: 0, 65: 0, 71: 0, 47: 0, 11: 0, 92: 0, 48: 0 }
    fixture.componentInstance.content = expected;

    fixture.detectChanges();

    const actual = fixture.debugElement
      .query(By.css('#list'))
      .children
      .reduce((accumulator, element) => {

        const key = element.nativeElement.textContent;
        accumulator[parseInt(key)] = 0;

        return accumulator;

      }, {} as { [key: number]: number });

    expect(actual).toEqual(expected);

  });

});

@Component({
  template: `
    <ng-container *ngIf="content">
      <ul id="list">
        <li *ngFor="let item of content | keyvalueKeepOrder">
          {{item.key}}
        </li>
      </ul>
    </ng-container>
  `
})
class TestComponent {

  content: any;

}

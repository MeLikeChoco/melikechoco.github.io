import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTooltipComponent } from './default-tooltip.component';

describe('DefaultTooltipComponent', () => {
  let component: DefaultTooltipComponent;
  let fixture: ComponentFixture<DefaultTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

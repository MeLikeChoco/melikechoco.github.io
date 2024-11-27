import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultTooltipContent } from '../../tooltipOptions';

import { TooltipComponent } from './tooltip.component';

describe('DefaultTooltipComponent', () => {

  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [TooltipComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();

  });

  it('should create', () => {

    expect(component).toBeTruthy();
    expect(component.tooltipElement).toBeTruthy();
    expect(component.input).toBe(DefaultTooltipContent);

  });

});

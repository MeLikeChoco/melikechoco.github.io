import { TestBed } from '@angular/core/testing';

import { TooltipService } from './tooltip-service.service';

describe('TooltipServiceService', () => {
  let service: TooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

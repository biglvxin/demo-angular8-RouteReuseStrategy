import { TestBed } from '@angular/core/testing';

import { RouteStrategyService } from './route-strategy.service';

describe('RouteStrategyService', () => {
  let service: RouteStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

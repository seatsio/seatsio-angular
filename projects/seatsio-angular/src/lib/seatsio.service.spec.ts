import { TestBed } from '@angular/core/testing';

import { SeatsioService } from './seatsio.service';

describe('SeatsioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatsioService = TestBed.get(SeatsioService);
    expect(service).toBeTruthy();
  });
});

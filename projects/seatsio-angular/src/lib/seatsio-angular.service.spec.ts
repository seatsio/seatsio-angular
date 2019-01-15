import { TestBed } from '@angular/core/testing';

import { SeatsioAngularService } from './seatsio-angular.service';

describe('SeatsioAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatsioAngularService = TestBed.get(SeatsioAngularService);
    expect(service).toBeTruthy();
  });
});

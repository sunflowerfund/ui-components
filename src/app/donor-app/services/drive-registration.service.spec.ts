import { TestBed } from '@angular/core/testing';

import { DriveRegistrationService } from './drive-registration.service';

describe('DriveRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriveRegistrationService = TestBed.get(DriveRegistrationService);
    expect(service).toBeTruthy();
  });
});

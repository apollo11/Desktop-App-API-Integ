/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MobileVerificationService } from './mobile-verification.service';

describe('MobileVerificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileVerificationService]
    });
  });

  it('should ...', inject([MobileVerificationService], (service: MobileVerificationService) => {
    expect(service).toBeTruthy();
  }));
});

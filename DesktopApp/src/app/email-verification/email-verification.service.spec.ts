/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmailVerificationService } from './email-verification.service';

describe('EmailVerificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailVerificationService]
    });
  });

  it('should ...', inject([EmailVerificationService], (service: EmailVerificationService) => {
    expect(service).toBeTruthy();
  }));
});

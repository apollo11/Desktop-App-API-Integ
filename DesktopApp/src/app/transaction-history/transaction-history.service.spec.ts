/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransactionHistoryService } from './transaction-history.service';

describe('TransactionHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionHistoryService]
    });
  });

  it('should ...', inject([TransactionHistoryService], (service: TransactionHistoryService) => {
    expect(service).toBeTruthy();
  }));
});

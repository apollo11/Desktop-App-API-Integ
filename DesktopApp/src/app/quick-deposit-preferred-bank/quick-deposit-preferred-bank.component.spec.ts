/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuickDepositPreferredBankComponent } from './quick-deposit-preferred-bank.component';

describe('QuickDepositPreferredBankComponent', () => {
  let component: QuickDepositPreferredBankComponent;
  let fixture: ComponentFixture<QuickDepositPreferredBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickDepositPreferredBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickDepositPreferredBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

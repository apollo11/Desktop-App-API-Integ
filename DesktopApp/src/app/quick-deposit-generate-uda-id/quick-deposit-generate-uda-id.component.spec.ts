/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuickDepositGenerateUdaIdComponent } from './quick-deposit-generate-uda-id.component';

describe('QuickDepositGenerateUdaIdComponent', () => {
  let component: QuickDepositGenerateUdaIdComponent;
  let fixture: ComponentFixture<QuickDepositGenerateUdaIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickDepositGenerateUdaIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickDepositGenerateUdaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

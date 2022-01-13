import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpViewComponent } from './otp-view.component';

describe('OtpViewComponent', () => {
  let component: OtpViewComponent;
  let fixture: ComponentFixture<OtpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

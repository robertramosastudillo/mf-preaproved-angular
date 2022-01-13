import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfPreApprovedContentComponent } from './mf-pre-approved-content.component';

describe('MfClientContentComponent', () => {
  let component: MfPreApprovedContentComponent;
  let fixture: ComponentFixture<MfPreApprovedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfPreApprovedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfPreApprovedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

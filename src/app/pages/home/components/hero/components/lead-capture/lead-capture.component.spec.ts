import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCaptureComponent } from './lead-capture.component';

describe('LeadCaptureComponent', () => {
  let component: LeadCaptureComponent;
  let fixture: ComponentFixture<LeadCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadCaptureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

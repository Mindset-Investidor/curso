import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraContentCardComponent } from './extra-content-card.component';

describe('ExtraContentCardComponent', () => {
  let component: ExtraContentCardComponent;
  let fixture: ComponentFixture<ExtraContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraContentCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

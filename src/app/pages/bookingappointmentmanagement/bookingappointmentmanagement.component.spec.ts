import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingappointmentmanagementComponent } from './bookingappointmentmanagement.component';

describe('BookingappointmentmanagementComponent', () => {
  let component: BookingappointmentmanagementComponent;
  let fixture: ComponentFixture<BookingappointmentmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingappointmentmanagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingappointmentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

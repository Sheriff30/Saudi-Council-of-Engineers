import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeappointmentmanagementComponent } from './employeeappointmentmanagement.component';

describe('EmployeeappointmentmanagementComponent', () => {
  let component: EmployeeappointmentmanagementComponent;
  let fixture: ComponentFixture<EmployeeappointmentmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeappointmentmanagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeappointmentmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

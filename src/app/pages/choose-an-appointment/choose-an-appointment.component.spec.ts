import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAnAppointmentComponent } from './choose-an-appointment.component';

describe('ChooseAnAppointmentComponent', () => {
  let component: ChooseAnAppointmentComponent;
  let fixture: ComponentFixture<ChooseAnAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseAnAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseAnAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

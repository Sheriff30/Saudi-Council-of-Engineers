import { Component, ElementRef, ViewChild } from '@angular/core';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { IconField } from 'primeng/iconfield';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { TimeinputComponent } from '../../ui/timeinput/timeinput.component';
import { DateinputComponent } from '../../ui/dateinput/dateinput.component';
import { MinutesinputComponent } from '../../ui/minutesinput/minutesinput.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookingappointmentmanagement',
  standalone: true,
  imports: [
    SelectorComponent,
    IconField,
    TabsModule,
    CommonModule,
    TimeinputComponent,
    DateinputComponent,
    MinutesinputComponent,
    FormsModule,
  ],
  templateUrl: './bookingappointmentmanagement.component.html',
  styleUrls: ['./bookingappointmentmanagement.component.css'],
})
export class BookingappointmentmanagementComponent {
  switchState: boolean = false;
  @ViewChild('formContainer') formContainer!: ElementRef;

  bookingsByDay = {
    sunday: [
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: true },
    ],
    monday: [
      { date: '8/2/2025', time: '09:00 ص', status: true },
      { date: '8/2/2025', time: '11:00 ص', status: false },
    ],
    tuesday: [
      { date: '8/3/2025', time: '10:00 ص', status: true },
      { date: '8/3/2025', time: '01:00 م', status: false },
    ],
    wednesday: [
      { date: '8/4/2025', time: '02:00 م', status: true },
      { date: '8/4/2025', time: '03:30 م', status: false },
    ],
    thursday: [
      { date: '8/5/2025', time: '04:00 م', status: true },
      { date: '8/5/2025', time: '05:30 م', status: false },
    ],
  };

  handleSwitchChange(state: boolean): void {
    this.switchState = state;
  }

  onSubmitForm() {
    this.formContainer.nativeElement.style.display = 'none';
  }

  onExitForm() {
    this.formContainer.nativeElement.style.display = 'none';
  }

  openForm() {
    this.formContainer.nativeElement.style.display = 'flex';
  }
}

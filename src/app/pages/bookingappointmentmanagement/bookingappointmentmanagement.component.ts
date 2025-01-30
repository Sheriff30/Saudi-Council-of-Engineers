import { Component, ElementRef, ViewChild } from '@angular/core';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { IconField } from 'primeng/iconfield';
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { TimeinputComponent } from '../../ui/timeinput/timeinput.component';
import { DateinputComponent } from '../../ui/dateinput/dateinput.component';
import { MinutesinputComponent } from '../../ui/minutesinput/minutesinput.component';
import { FormsModule } from '@angular/forms';
import { SwitchInputComponent } from '../../ui/switch-input/switch-input.component';

@Component({
  selector: 'app-bookingappointmentmanagement',
  standalone: true,
  imports: [
    SelectorComponent,
    TabsModule,
    CommonModule,
    TimeinputComponent,
    DateinputComponent,
    MinutesinputComponent,
    FormsModule,
    SwitchInputComponent,
  ],
  templateUrl: './bookingappointmentmanagement.component.html',
  styleUrls: ['./bookingappointmentmanagement.component.css'],
})
export class BookingappointmentmanagementComponent {
  switchStates = {
    sunday: true,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
  };
  currentModal: 'formContainer' | null = null;
  isModalOpen = false;

  bookingsByDay: any = {
    sunday: [
      { date: '8/1/2025', time: '08:00 ص', status: false },
      { date: '8/1/2025', time: '10:00 ص', status: false },
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

  onSubmitForm() {
    console.log('Submit');
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentModal = null;
  }
  openModal(modalId: any) {
    this.isModalOpen = true;
    this.currentModal = modalId;
  }

  handleSwitchChange(day: keyof typeof this.switchStates): void {
    this.switchStates[day] = !this.switchStates[day];
  }

  selectorOptions = {
    dailyLimit: [
      { value: '40 معاد', label: '40 معاد' },
      { value: '30 معاد', label: '30 معاد' },
      { value: '20 معاد', label: '20 معاد' },
    ],
    status: [
      { value: 'محجوز', label: 'محجوز' },
      { value: 'غير محجوز', label: 'غير محجوز' },
    ],
  };

  filteredBookings: { [key: string]: any[] } = { ...this.bookingsByDay };
}

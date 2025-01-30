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
interface Booking {
  date: string;
  time: string;
  status: string; // Changed to string
}

interface BookingsByDay {
  [key: string]: Booking[];
}

@Component({
  selector: 'app-bookingappointmentmanagement',
  standalone: true,
  imports: [
    SelectorComponent,
    TabsModule,
    CommonModule,
    FormsModule,
    SwitchInputComponent,
    DateinputComponent,
    TimeinputComponent,
    MinutesinputComponent,
  ],
  templateUrl: './bookingappointmentmanagement.component.html',
  styleUrls: ['./bookingappointmentmanagement.component.css'],
})
export class BookingappointmentmanagementComponent {
  selectedDailyLimit: string | null = null;
  selectedStatus: string | null = null; // Changed to string

  switchStates = {
    sunday: true,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
  };

  currentModal: 'formContainer' | null = null;
  isModalOpen = false;

  // Original data
  bookingsByDay: BookingsByDay = {
    sunday: [
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
    ],
    monday: [
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
    ],
    tuesday: [
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
    ],
    wednesday: [
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
    ],
    thursday: [
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
      { date: '8/3/2025', time: '10:00 ص', status: 'محجوز' },
      { date: '8/3/2025', time: '01:00 م', status: 'غير محجوز' },
    ],
  };

  // Filtered data
  filteredBookings: BookingsByDay = { ...this.bookingsByDay };

  selectorOptions = {
    dailyLimit: [
      { value: '40 معاد', label: '40 معاد' },
      { value: '30 معاد', label: '30 معاد' },
      { value: '20 معاد', label: '20 معاد' },
    ],
    status: [
      { value: 'محجوز', label: 'محجوز' }, // Changed to string
      { value: 'غير محجوز', label: 'غير محجوز' }, // Changed to string
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

  applyFilters(): void {
    this.filteredBookings = JSON.parse(JSON.stringify(this.bookingsByDay));

    if (this.selectedStatus !== null) {
      Object.keys(this.filteredBookings).forEach((day) => {
        this.filteredBookings[day] = this.filteredBookings[day].filter(
          (booking) => booking.status === this.selectedStatus,
        );
      });
    }

    if (this.selectedDailyLimit) {
      const limit = parseInt(this.selectedDailyLimit.split(' ')[0], 10);
      console.log('Parsed Limit:', limit);
      if (!isNaN(limit)) {
        Object.keys(this.filteredBookings).forEach((day) => {
          this.filteredBookings[day] = this.filteredBookings[day].slice(
            0,
            limit,
          );
        });
      }
    }
  }
}

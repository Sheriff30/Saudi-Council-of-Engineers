import { Component, OnInit } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { DatePickerComponent } from '../../ui/date-picker-component/date-picker-component.component';
import { TimePickerComponent } from '../../ui/timepicker/timepicker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Booking {
  visitNumber: number;
  date: string;
  time: string;
  service: string;
  branch: string;
  employee: string;
  client: string;
}

@Component({
  selector: 'app-upcomingbookings',
  imports: [
    IconField,
    SelectorComponent,
    DatePickerComponent,
    TimePickerComponent,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  standalone: true,
  templateUrl: './upcomingbookings.component.html',
  styleUrl: './upcomingbookings.component.css',
})
export class UpcomingbookingsComponent implements OnInit {
  bookings: Booking[] = [];
  filteredBookings: Booking[] = [];

  searchText: string = '';
  selectedStatus: string = '';
  selectedDate: string = '';
  selectedTime: string = '';

  private arabicMonths: { [key: string]: number } = {
    يناير: 0,
    فبراير: 1,
    مارس: 2,
    أبريل: 3,
    مايو: 4,
    يونيو: 5,
    يوليو: 6,
    أغسطس: 7,
    سبتمبر: 8,
    أكتوبر: 9,
    نوفمبر: 10,
    ديسمبر: 11,
  };

  ngOnInit() {
    this.bookings = [
      {
        visitNumber: 10,
        date: 'الأربعاء , 7 يناير 2026',
        time: '10:30 صباحًا',
        service: 'الاعتماد المهني للمهندسين',
        branch: 'جدة',
        employee: 'الاعتماد المهني للمهندسين',
        client: 'خالد عبدالله المصعبي',
      },
      {
        visitNumber: 10,
        date: 'الأربعاء , 8 يناير 2025',
        time: '10:40 صباحًا',
        service: 'الاعتماد المهني للمهندسين',
        branch: 'جدة',
        employee: 'الاعتماد المهني للمهندسين',
        client: 'خالد عبدالله المصعبي',
      },
      {
        visitNumber: 10,
        date: 'الأربعاء , 7 يناير 2026',
        time: '10:30 مساءً',
        service: 'الاعتماد المهني للمهندسين',
        branch: 'جدة',
        employee: 'الاعتماد المهني للمهندسين',
        client: 'خالد عبدالله المصعبي',
      },
      {
        visitNumber: 10,
        date: 'الأربعاء , 8 يناير 2025',
        time: '10:40 مساءً',
        service: 'الاعتماد المهني للمهندسين',
        branch: 'جدة',
        employee: 'الاعتماد المهني للمهندسين',
        client: 'خالد عبدالله المصعبي',
      },
    ];

    this.filteredBookings = [...this.bookings];
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchText = target.value;
    this.applyFilters();
  }

  onStatusChange(status: string): void {
    this.selectedStatus = status;
    this.applyFilters();
  }

  onTimeChange(time: string): void {
    console.log('Time received:', time);
    this.selectedTime = time;
    this.applyFilters();
  }

  onDateChange(date: string): void {
    console.log('Date received:', date);
    this.selectedDate = date;
    this.applyFilters();
  }

  private parseArabicDate(dateStr: string): Date {
    const parts = dateStr.split(' ');
    const day = parseInt(parts[2]);
    const month = this.arabicMonths[parts[3]];
    const year = parseInt(parts[4]);
    return new Date(year, month, day);
  }

  private applyFilters(): void {
    this.filteredBookings = this.bookings.filter((booking) => {
      const matchesSearch =
        !this.searchText ||
        Object.values(booking).some((value) =>
          value
            .toString()
            .toLowerCase()
            .includes(this.searchText.toLowerCase()),
        );

      const matchesStatus =
        !this.selectedStatus || this.selectedStatus === 'قادمة';
      const matchesDate =
        !this.selectedDate || booking.date === this.selectedDate;

      const matchesTime =
        !this.selectedTime || booking.time === this.selectedTime;

      return matchesSearch && matchesStatus && matchesDate && matchesTime;
    });

    console.log('Filtered bookings:', {
      total: this.filteredBookings.length,
      filters: {
        search: this.searchText,
        status: this.selectedStatus,
        date: this.selectedDate,
        time: this.selectedTime,
      },
    });
  }

  deleteBooking(visitNumber: number): void {
    this.bookings = this.bookings.filter(
      (booking) => booking.visitNumber !== visitNumber,
    );
    this.applyFilters();
  }

  get totalBookings(): number {
    return this.filteredBookings.length;
  }
}

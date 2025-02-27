import { Component, OnInit } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { DatePickerComponent } from '../../ui/date-picker-component/date-picker-component.component';
import { TimePickerComponent } from '../../ui/timepicker/timepicker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmdeleteComponent } from '../../ui/confirmdelete/confirmdelete.component';

interface Booking {
  id: number;
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
    ConfirmdeleteComponent,
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

  ngOnInit() {
    this.bookings = [
      {
        id: 0,
        visitNumber: 10,
        date: '2025-01-03',
        time: '10:30',
        service: 'الاعتماد المهني للمهندسين',
        branch: 'جدة',
        employee: 'الاعتماد المهني للمهندسين',
        client: 'خالد عبدالله المصعبي',
      },
      {
        id: 1,
        visitNumber: 10,
        date: '2025-01-03',
        time: '10:30',
        service: 'الاعتماد المهني للمهندسين',
        branch: 'جدة',
        employee: 'الاعتماد المهني للمهندسين',
        client: 'خالد عبدالله المصعبي',
      },
      {
        id: 2,

        visitNumber: 10,
        date: '2025-01-04',
        time: '10:40',
        service: 'الاعتماد المهني للمهندسين',
        branch: 'جدة',
        employee: 'الاعتماد المهني للمهندسين',
        client: 'خالد عبدالله المصعبي',
      },
      {
        id: 3,

        visitNumber: 10,
        date: '2025-01-03',
        time: '10:40',
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

  deleteBooking(id: number): void {
    this.bookings = this.bookings.filter((booking) => booking.id !== id);
    this.applyFilters();
  }

  get totalBookings(): number {
    return this.filteredBookings.length;
  }

  formatDate(dateValue: string) {
    const date = new Date(dateValue);

    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `بتاريخ ${dayOfMonth}/${month}/${year}`;
  }

  formatTime(timeValue: string) {
    const [hourStr, minuteStr] = timeValue.split(':');
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);

    const period = hour >= 12 ? 'مساءً' : 'صباحًا';

    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
    }

    return `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
  }

  // Delete Modal
  showDeleteModal = false;
  itemToDelete: any = null;

  openDeleteModal(item: any) {
    this.itemToDelete = item;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.itemToDelete) {
      this.bookings = this.bookings.filter((row) => row !== this.itemToDelete);
      this.showDeleteModal = false;
      this.itemToDelete = null;
      this.applyFilters();
    }
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.itemToDelete = null;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  template: `
    <div class="date-picker">
      <input type="date" (change)="onDateChange($event)" />
      <p>{{ formattedDate }}</p>
    </div>
  `,
  styleUrls: ['./date-picker-component.component.css'],
})
export class DatePickerComponent {
  formattedDate: string = 'الأربعاء , 8 يناير 2025';

  weekdays: string[] = [
    'الأحد',
    'الاثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ];
  months: string[] = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];

  @Output() dateChanged = new EventEmitter<string>();

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const dateValue = input.value;
    if (dateValue) {
      const date = new Date(dateValue);
      const day = this.weekdays[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = this.months[date.getMonth()];
      const year = date.getFullYear();

      this.formattedDate = `${day} , ${dayOfMonth} ${month} ${year}`;
      this.dateChanged.emit(dateValue);
      console.log(dateValue);
    } else {
      this.formattedDate = '';
    }
  }
}

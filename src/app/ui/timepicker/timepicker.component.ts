import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  template: `
    <div class="time-picker">
      <input type="time" (change)="onTimeChange($event)" />
      <p>{{ formattedTime }}</p>
    </div>
  `,
  styleUrl: './timepicker.component.css',
})
export class TimePickerComponent {
  formattedTime: string = '10:30 صباحًا';

  @Output() timeChanged = new EventEmitter<string>();

  onTimeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const timeValue = input.value;
    if (timeValue) {
      const [hourStr, minuteStr] = timeValue.split(':');
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      const period = hour >= 12 ? 'مساءً' : 'صباحًا';

      // Convert to 12-hour format
      if (hour > 12) {
        hour -= 12;
      } else if (hour === 0) {
        hour = 12;
      }

      this.formattedTime = `${hour}:${minute.toString().padStart(2, '0')} ${period}`;
      this.timeChanged.emit(timeValue);
      console.log(timeValue);
    } else {
      this.timeChanged.emit('');
      this.formattedTime = '';
    }
  }
}

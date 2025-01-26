import { Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { DatePickerComponent } from '../../ui/date-picker-component/date-picker-component.component';
import { TimePickerComponent } from '../../ui/timepicker/timepicker.component';

@Component({
  selector: 'app-expiredbookings',
  imports: [
    IconField,
    SelectorComponent,
    DatePickerComponent,
    TimePickerComponent,
  ],
  standalone: true,
  templateUrl: './expiredbookings.component.html',
  styleUrl: '../upcomingbookings/upcomingbookings.component.css',
})
export class ExpiredbookingsComponent {}

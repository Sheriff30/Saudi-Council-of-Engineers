import { Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { DatePickerComponent } from '../../ui/date-picker-component/date-picker-component.component';
import { TimePickerComponent } from '../../ui/timepicker/timepicker.component';

@Component({
  selector: 'app-upcomingbookings',
  imports: [
    IconField,
    SelectorComponent,
    DatePickerComponent,
    TimePickerComponent,
  ],
  standalone: true,
  templateUrl: './upcomingbookings.component.html',
  styleUrl: './upcomingbookings.component.css',
})
export class UpcomingbookingsComponent {}

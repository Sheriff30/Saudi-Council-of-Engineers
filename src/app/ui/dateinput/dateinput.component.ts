import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dateinput',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dateinput.component.html',
  styleUrls: ['./dateinput.component.css'],
})
export class DateinputComponent {
  @Input() isDisabled: boolean = false;
  @Input() label: string = '';
}

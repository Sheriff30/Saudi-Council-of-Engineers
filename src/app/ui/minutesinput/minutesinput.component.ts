import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minutesinput',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minutesinput.component.html',
  styleUrl: './minutesinput.component.css',
})
export class MinutesinputComponent {
  @Input() isDisabled: boolean = false;
  @Input() label: string | undefined;
  @Input() inputId: string = '';
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeinput',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeinput.component.html',
  styleUrl: './timeinput.component.css',
})
export class TimeinputComponent {
  @Input() isDisabled: boolean = false;
}

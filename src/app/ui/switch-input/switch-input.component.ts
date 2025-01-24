import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-input',
  standalone: true,
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.css'],
})
export class SwitchInputComponent {
  @Input() isChecked: boolean = false;

  @Output() toggleChange = new EventEmitter<boolean>();

  onToggle(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.toggleChange.emit(inputElement.checked);
  }
}

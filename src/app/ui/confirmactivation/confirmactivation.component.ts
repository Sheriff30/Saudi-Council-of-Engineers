import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmactivation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmactivation.component.html',
  styleUrl: './confirmactivation.component.css',
})
export class ConfirmactivationComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onClose() {
    this.close.emit();
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-disable-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmdisable.component.html',
  styleUrl: './confirmdisable.component.css',
})
export class DisableModalComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.close.emit();
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmdelete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmdelete.component.html',
  styleUrl: './confirmdelete.component.css',
})
export class ConfirmdeleteComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}

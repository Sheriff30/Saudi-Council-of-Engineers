import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';

@Component({
  selector: 'app-passwordinput',
  standalone: true,
  templateUrl: './passwordinput.component.html',
  styleUrls: ['./passwordinput.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordinputComponent),
      multi: true,
    },
  ],
})
export class PasswordinputComponent implements ControlValueAccessor {
  @Input() label: string = 'الرقم السري';
  @Input() name: string = '';
  @Input() placeholder: string = 'أدخل الرقم السري';
  @Input() inputId: string = '';
  showPassword: boolean = false;
  private _value: string = '';

  @Output() valueChange = new EventEmitter<string>();

  // Implement the ControlValueAccessor methods
  writeValue(value: string): void {
    if (value !== undefined) {
      this._value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.valueChange.subscribe(fn);
  }

  registerOnTouched(fn: any): void {}

  // Method to toggle the password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // To handle input value change
  onValueChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this._value = input.value;
    this.valueChange.emit(this._value);
  }
}

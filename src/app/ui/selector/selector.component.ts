import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorComponent),
      multi: true,
    },
  ],
})
export class SelectorComponent implements ControlValueAccessor {
  @Input() options: { value: string | number; label: string }[] = [];
  @Input() placeholder: string = '';
  @Input() label: string = '';

  value: string | number | null = null;

  private onChange: (value: string | number | null) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    // Ensure placeholder is displayed initially
    this.writeValue(null);
  }

  writeValue(value: string | number | null): void {
    this.value = value ?? null;
  }

  registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onSelectionChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.value = value === '' ? null : value; // Treat empty value as null
    this.onChange(this.value);
    this.onTouched();
  }
}

import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClass">
      <label *ngIf="label" [for]="inputId">{{ label }}</label>
      <input
        [id]="inputId"
        [type]="type"
        [value]="value"
        [placeholder]="placeholder"
        [class]="inputClass"
        [name]="name"
        (input)="onInputChange($event)"
      />
    </div>
  `,
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string | undefined;
  @Input() type: string = 'text';
  @Input() name: string = 'text';
  @Input() placeholder: string = '';
  @Input() wrapperClass: string = '';
  @Input() inputClass: string = '';
  @Input() inputId: string = '';
  @Output() valueChange = new EventEmitter<string>();

  value: string = '';

  private onChange = (value: string) => {};
  private onTouched = () => {};

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { SwitchInputComponent } from '../../ui/switch-input/switch-input.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../ui/input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    IconFieldModule,
    SelectorComponent,
    SwitchInputComponent,
    CommonModule,
    InputComponent,
    FormsModule,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  @ViewChild('formContainer') formContainer!: ElementRef;

  serviceCards = [
    {
      id: 1,
      title: 'الاعتماد المهني للمهندسين',
      switchState: true,
      branches: ['فرع 1', 'فرع 2', 'فرع 3'],
    },
    {
      id: 2,
      title: 'خدمة أخرى',
      switchState: false,
      branches: ['فرع 4', 'فرع 5'],
    },
    {
      id: 3,
      title: 'خدمة ثالثة',
      switchState: true,
      branches: ['فرع 6', 'فرع 7', 'فرع 8', 'فرع 9'],
    },
  ];

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  selectedValue?: string;
  switchState: boolean = true;

  handleSwitchChange(index: number, state: boolean): void {
    this.serviceCards[index].switchState = state;
  }

  onSubmitForm() {
    this.formContainer.nativeElement.style.display = 'none';
  }

  onExitForm() {
    this.formContainer.nativeElement.style.display = 'none';
  }

  openForm() {
    this.formContainer.nativeElement.style.display = 'flex';
  }
}

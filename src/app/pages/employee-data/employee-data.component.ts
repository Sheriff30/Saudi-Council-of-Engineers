import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';
import { SwitchInputComponent } from '../../ui/switch-input/switch-input.component';
import { InputComponent } from '../../ui/input/input.component';
import { NgForm } from '@angular/forms';
import { PasswordinputComponent } from '../../ui/passwordinput/passwordinput.component';
import { SelectorComponent } from '../../ui/selector/selector.component';

interface Selector {
  name: string;
  code: string;
}

@Component({
  selector: 'app-employee-data',
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    SwitchInputComponent,
    InputComponent,
    PasswordinputComponent,
    SelectorComponent,
  ],
  standalone: true,

  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css',
})
export class EmployeeDataComponent implements OnInit {
  @ViewChild('myForm', { static: true }) myForm!: NgForm;

  selectedbranch2: Selector | null = null;
  formData = {
    name: null,
    id: null,
    email: null,
    phoneNumber: null,
    password: null,
    passwordConfirm: null,
    branch: null,
    service: null,
    role: null,
  };

  switchState: boolean = false;

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  selectedValue?: string;

  ngOnInit() {}

  handleSwitchChange(state: boolean): void {
    this.switchState = state;
  }
  onSubmit(): void {
    console.log(this.formData);
  }
}

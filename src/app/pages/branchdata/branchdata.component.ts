import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { TabsModule } from 'primeng/tabs';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SwitchInputComponent } from '../../ui/switch-input/switch-input.component';
import { PasswordinputComponent } from '../../ui/passwordinput/passwordinput.component';
import { InputComponent } from '../../ui/input/input.component';
import { SelectorComponent } from '../../ui/selector/selector.component';

interface Selector {
  name: string;
  code: string;
}

@Component({
  selector: 'app-branchdata',
  standalone: true,
  imports: [
    IconFieldModule,
    FormsModule,
    CommonModule,
    PaginatorModule,
    TabsModule,
    ToggleSwitchModule,
    SwitchInputComponent,
    PasswordinputComponent,
    InputComponent,
    SelectorComponent,
  ],
  templateUrl: './branchdata.component.html',
  styleUrl: './branchdata.component.css',
})
export class BranchdataComponent implements OnInit {
  @ViewChild('formContainer') formContainer!: ElementRef;
  // State
  branches: Selector[] | undefined;
  status: Selector[] | undefined;
  role: Selector[] | undefined;
  selectedbranch: Selector | undefined;
  selectedstatus: Selector | undefined;
  selectedrole: Selector | undefined;
  totalRecords = 0;
  checked: boolean = false;
  switchState: boolean = false;
  value!: string;
  first: number = 0;
  tableData = [
    {
      id: 1,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'good',
      status: true,
    },
    {
      id: 2,
      name: 'جدة',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'mid',
      status: false,
    },
    {
      id: 3,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'bad',

      status: true,
    },
    {
      id: 4,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'good',
      status: true,
    },
    {
      id: 5,
      name: 'جدة',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'mid',
      status: false,
    },
    {
      id: 6,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'bad',

      status: true,
    },
    {
      id: 7,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'good',
      status: true,
    },
    {
      id: 8,
      name: 'جدة',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'mid',
      status: false,
    },
    {
      id: 9,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'bad',

      status: true,
    },
    {
      id: 10,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'bad',

      status: true,
    },
    {
      id: 11,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'bad',

      status: true,
    },
    {
      id: 12,
      name: 'نجران',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'bad',

      status: true,
    },
  ];
  rows: number = 10;
  paginatedData = this.tableData.slice(0, this.rows);

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  selectedValue?: string;

  // Functions
  handleSwitchChange(state: boolean): void {
    this.switchState = state;
  }
  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    const start = this.first;
    const end = start + this.rows;
    this.paginatedData = this.tableData.slice(start, end);
  }
  ngOnInit() {
    this.totalRecords = this.tableData.length;
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

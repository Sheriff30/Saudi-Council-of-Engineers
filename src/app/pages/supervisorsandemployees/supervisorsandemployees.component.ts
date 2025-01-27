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
  selector: 'app-supervisorsandemployees',
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
  templateUrl: './supervisorsandemployees.component.html',
  styleUrl: './supervisorsandemployees.component.css',
})
export class SupervisorsandemployeesComponent implements OnInit {
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
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 2,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 3,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 4,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 5,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 6,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 7,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 8,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 9,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 10,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 11,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 12,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 13,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 14,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 15,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 16,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 17,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 18,
      name: 'ثامر بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
    {
      id: 19,
      name: 'وليد ال ضبعان',
      role: true,
      branch: 'نجران',
      status: true,
    },
    {
      id: 20,
      name: 'بن فيصل الوادعي',
      role: false,
      branch: 'جيزان',
      status: false,
    },
  ];
  rows: number = 10;
  paginatedData = this.tableData.slice(0, this.rows);
  isModalOpen = false;
  currentModal: 'formContainer' | null = null;

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
    console.log('Submit');
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentModal = null;
  }
  openModal(modalId: any) {
    this.isModalOpen = true;
    this.currentModal = modalId;
  }
}

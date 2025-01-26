import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { TabsModule } from 'primeng/tabs';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { SelectorComponent } from '../../ui/selector/selector.component';

interface Selector {
  name: string;
  code: string;
}

@Component({
  selector: 'app-employeeappointmentmanagement',
  standalone: true,
  imports: [
    IconFieldModule,
    FormsModule,
    CommonModule,
    PaginatorModule,
    TabsModule,
    ToggleSwitchModule,
    SelectorComponent,
  ],
  templateUrl: './employeeappointmentmanagement.component.html',
  styleUrl: './employeeappointmentmanagement.component.css',
})
export class EmployeeappointmentmanagementComponent implements OnInit {
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
      name: 'وليد ال ضبعان',
      employeename: 'أسامة الدبيان',
      servicetype: 'الاعتماد المهني',
      branch: 'تبوك',
      date: '9/9/2025',
      time: '5:58 PM',
      status: true,
      numberofbookings: 10,
    },
    {
      id: 2,
      name: 'سعيد الشمراني',
      employeename: 'عبدالله الفهيد',
      servicetype: 'إدارة الجودة',
      branch: 'الرياض',
      date: '10/9/2025',
      time: '10:15 AM',
      status: false,
      numberofbookings: 20,
    },
    {
      id: 3,
      name: 'فهد المطيري',
      employeename: 'محمد القحطاني',
      servicetype: 'الاعتماد المهني',
      branch: 'جدة',
      date: '11/9/2025',
      time: '2:30 PM',
      status: true,
      numberofbookings: 30,
    },
    {
      id: 4,
      name: 'عبدالرحمن العنزي',
      employeename: 'سالم العتيبي',
      servicetype: 'التدريب والتطوير',
      branch: 'مكة',
      date: '12/9/2025',
      time: '9:45 AM',
      status: false,
      numberofbookings: 90,
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

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { IconFieldModule } from 'primeng/iconfield';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectorComponent } from '../../ui/selector/selector.component';

interface Selector {
  name: string;
  code: string;
}

interface TableRow {
  id: number;
  name: string;
  employeename: string;
  servicetype: string;
  branch: string;
  date: string;
  time: string;
  status: string;
  numberofbookings: number;
}

@Component({
  selector: 'app-employeeappointmentmanagement',
  standalone: true,
  imports: [
    IconFieldModule,
    FormsModule,
    CommonModule,
    PaginatorModule,
    ToggleSwitchModule,
    SelectorComponent,
  ],
  templateUrl: './employeeappointmentmanagement.component.html',
  styleUrl: './employeeappointmentmanagement.component.css',
})
export class EmployeeappointmentmanagementComponent implements OnInit {
  currentModal: 'formContainer' | null = null;
  isModalOpen = false;
  branches: Selector[] = [];
  status: Selector[] = [];
  role: Selector[] = [];
  selectedbranch: Selector | undefined;
  selectedrole: Selector | undefined;
  totalRecords = 0;
  checked: boolean = false;
  switchState: boolean = false;
  value!: string;
  first: number = 0;
  rows: number = 10;

  paginatedData: TableRow[] = [];
  filteredData: TableRow[] = [];
  searchText: string = '';
  selectedStatus: string | null = null;
  selectedPopupStatus: string | null = null;
  searchPopupText: string = '';

  options = [
    { value: 'مسند', label: 'مسند' },
    { value: 'غير مسند', label: 'غير مسند' },
  ];

  statusOptions = [
    { value: 'مسند', label: 'مسند' },
    { value: 'غير مسند', label: 'غير مسند' },
  ];
  popupStatusOptions = [
    { value: 'متاح', label: 'متاح' },
    { value: 'غير متاح', label: 'غير متاح' },
  ];

  ngOnInit() {
    this.totalRecords = this.tableData.length;
    this.filteredData = this.tableData;
    this.paginateData();
  }

  tableData = [
    {
      id: 1,
      name: 'وليد ال ضبعان',
      employeename: 'أسامة الدبيان',
      servicetype: 'الاعتماد المهني',
      branch: 'تبوك',
      date: '9/9/2025',
      time: '5:58 PM',
      status: 'مسند',
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
      status: 'غير مسند',
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
      status: 'مسند',
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
      status: 'غير مسند',
      numberofbookings: 90,
    },
    {
      id: 1,
      name: 'وليد ال ضبعان',
      employeename: 'أسامة الدبيان',
      servicetype: 'الاعتماد المهني',
      branch: 'تبوك',
      date: '9/9/2025',
      time: '5:58 PM',
      status: 'مسند',
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
      status: 'غير مسند',
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
      status: 'مسند',
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
      status: 'غير مسند',
      numberofbookings: 90,
    },
    {
      id: 1,
      name: 'وليد ال ضبعان',
      employeename: 'أسامة الدبيان',
      servicetype: 'الاعتماد المهني',
      branch: 'تبوك',
      date: '9/9/2025',
      time: '5:58 PM',
      status: 'مسند',
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
      status: 'غير مسند',
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
      status: 'مسند',
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
      status: 'غير مسند',
      numberofbookings: 90,
    },
  ];

  popupData = [
    {
      id: 1,
      name: 'وليد ال ضبعان',
      employeename: 'أسامة الدبيان',
      servicetype: 'الاعتماد المهني',
      branch: 'تبوك',
      date: '9/9/2025',
      time: '5:58 PM',
      status: 'متاح',
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
      status: 'غير متاح',
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
      status: 'متاح',
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
      status: 'غير متاح',
      numberofbookings: 90,
    },
  ];

  // Updated filter logic
  applyFilters() {
    this.filteredData = this.tableData.filter((branch) => {
      const matchesSearch = this.searchText
        ? branch.name.toLowerCase().includes(this.searchText.toLowerCase())
        : true;

      const matchesStatus = this.selectedStatus
        ? branch.status === this.selectedStatus
        : true;

      return matchesSearch && matchesStatus;
    });

    this.totalRecords = this.filteredData.length;
    this.paginatedData = this.filteredData.slice(0, this.rows);
  }

  filteredPopupData() {
    return this.popupData.filter((row) => {
      const matchesStatus = this.selectedPopupStatus
        ? row.status === this.selectedPopupStatus
        : true;
      const matchesSearch = this.searchText
        ? row.name.includes(this.searchText)
        : true;
      return matchesStatus && matchesSearch;
    });
  }
  // Updated search handler
  onSearchChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchText = inputElement.value;
    this.applyFilters();
  }
  onSearchChangePopup(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchText = inputElement.value;
    this.filteredPopupData();
  }

  // Updated status change handler
  onStatusChange(event: any) {
    this.selectedStatus = event;
    this.applyFilters();
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.paginateData();
  }

  paginateData() {
    this.paginatedData = this.filteredData.slice(
      this.first,
      this.first + this.rows,
    );
  }

  handleSwitchChange(state: boolean): void {
    this.switchState = state;
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

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { TabsModule } from 'primeng/tabs';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { SwitchInputComponent } from '../../ui/switch-input/switch-input.component';
import { InputComponent } from '../../ui/input/input.component';
import { PasswordinputComponent } from '../../ui/passwordinput/passwordinput.component';

interface TableRow {
  id: number;
  name: string;
  role: string;
  branch: string;
  status: string;
}

@Component({
  selector: 'app-supervisorsandemployees',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    PaginatorModule,
    TabsModule,
    IconFieldModule,
    SelectorComponent,
    SwitchInputComponent,
    InputComponent,
    PasswordinputComponent,
  ],
  templateUrl: './supervisorsandemployees.component.html',
  styleUrl: './supervisorsandemployees.component.css',
})
export class SupervisorsandemployeesComponent implements OnInit {
  searchQuery: string = '';
  selectedBranch: any;
  selectedStatus: any;
  selectedRole: any;
  totalRecords = 0;
  first: number = 0;
  rows: number = 10;
  isModalOpen = false;
  currentModal: 'formContainer' | null = null;
  switchState: boolean = false;
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  // Table data
  tableData: TableRow[] = [
    {
      id: 1,
      name: 'وليد ال ضبعان',
      role: 'مشرف',
      branch: 'نجران',
      status: 'نشط',
    },
    {
      id: 2,
      name: 'ثامر بن فيصل الوادعي',
      role: 'موظف',
      branch: 'جيزان',
      status: 'غير نشط',
    },
  ];

  paginatedData: TableRow[] = this.tableData.slice(0, this.rows);

  // Filter options
  branches = [
    { value: 'نجران', label: 'نجران' },
    { value: 'جيزان', label: 'جيزان' },
  ];

  statusOptions = [
    { value: 'نشط', label: 'نشط' },
    { value: 'غير نشط', label: 'غير نشط' },
  ];

  roles = [
    { value: 'مشرف', label: 'مشرف' },
    { value: 'موظف', label: 'موظف' },
  ];

  ngOnInit() {
    this.totalRecords = this.tableData.length;
    this.applyFilters();
  }
  applyFilters(): void {
    let filteredData = this.tableData;

    if (this.searchQuery) {
      filteredData = filteredData.filter((row) =>
        row.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    }

    if (this.selectedBranch) {
      filteredData = filteredData.filter(
        (row) => row.branch === this.selectedBranch,
      );
    }

    if (this.selectedStatus) {
      filteredData = filteredData.filter(
        (row) => row.status === this.selectedStatus,
      );
    }

    if (this.selectedRole) {
      filteredData = filteredData.filter(
        (row) => row.role === this.selectedRole,
      );
    }

    console.log('Filtered Data:', filteredData);

    this.paginatedData = filteredData.slice(this.first, this.first + this.rows);
    this.totalRecords = filteredData.length;
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.applyFilters();
  }

  openModal(modalId: 'formContainer') {
    this.isModalOpen = true;
    this.currentModal = modalId;
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentModal = null;
  }

  onSubmitForm() {
    console.log('Form submitted');
  }

  handleSwitchChange(state: boolean): void {
    this.switchState = state;
  }
}

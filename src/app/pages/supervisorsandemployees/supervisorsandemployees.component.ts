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
import { ConfirmdeleteComponent } from '../../ui/confirmdelete/confirmdelete.component';
import { ConfirmactivationComponent } from '../../ui/confirmactivation/confirmactivation.component';
import { DisableModalComponent } from '../../ui/confirmdisable/confirmdisable.component';

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
    ConfirmactivationComponent,
    SwitchInputComponent,
    InputComponent,
    ConfirmdeleteComponent,
    PasswordinputComponent,
    DisableModalComponent,
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

  // Delete Modal
  showDeleteModal = false;
  itemToDelete: any = null;

  openDeleteModal(item: any) {
    this.itemToDelete = item;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.itemToDelete) {
      this.paginatedData = this.paginatedData.filter(
        (row) => row !== this.itemToDelete,
      );
      this.showDeleteModal = false;
      this.itemToDelete = null;
    }
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.itemToDelete = null;
  }

  // Confirm activation

  showActivationModal = false;
  itemToActivate: any = null;

  openActivationModal(item: any) {
    this.itemToActivate = item;
    this.showActivationModal = true;
  }

  confirmActivation() {
    if (this.itemToActivate) {
      this.itemToActivate.status = 'نشط';
      this.showActivationModal = false;
      this.itemToActivate = null;
    }
  }

  closeActivationModal() {
    this.showActivationModal = false;
    this.itemToActivate = null;
  }

  //Confirm Disable

  showDisableModal = false;
  itemToDisable: any = null;

  openDisableModal(item: any) {
    this.itemToDisable = item;
    this.showDisableModal = true;
  }

  confirmDisable() {
    if (this.itemToDisable) {
      this.itemToDisable.status = 'غير نشط';
      this.showDisableModal = false;
      this.itemToDisable = null;
    }
  }

  closeDisableModal() {
    this.showDisableModal = false;
    this.itemToDisable = null;
  }
}

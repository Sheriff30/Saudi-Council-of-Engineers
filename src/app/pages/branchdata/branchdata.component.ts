import { Component, OnInit } from '@angular/core';
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
import { ConfirmactivationComponent } from '../../ui/confirmactivation/confirmactivation.component';
import { ConfirmdeleteComponent } from '../../ui/confirmdelete/confirmdelete.component';
import { DisableModalComponent } from '../../ui/confirmdisable/confirmdisable.component';

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
    ConfirmactivationComponent,
    ConfirmdeleteComponent,
    DisableModalComponent,
  ],
  templateUrl: './branchdata.component.html',
  styleUrl: './branchdata.component.css',
})
export class BranchdataComponent implements OnInit {
  currentModal: 'formContainer' | null = null;
  isModalOpen = false;

  searchTerm: string = '';
  selectedStatus: string | null = null;
  selectedPerformance: string | null = null;

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
      status: 'نشط',
    },
    {
      id: 2,
      name: 'جدة',
      servicesnumber: 10,
      employeesnumber: 90,
      performance: 'mid',
      status: 'غير نشط',
    },
  ];

  filteredBranches = this.tableData;

  rows: number = 10;
  paginatedData = this.tableData.slice(0, this.rows);

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  performanceOptions = [
    { value: 'good', label: 'جيد' },
    { value: 'mid', label: 'متوسط' },
    { value: 'poor', label: 'ضعيف' },
  ];

  statusOptions = [
    { value: 'نشط', label: 'نشط' },
    { value: 'غير نشط', label: 'غير نشط' },
  ];

  handleSwitchChange(state: boolean): void {
    this.switchState = state;
  }

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    const start = this.first;
    const end = start + this.rows;
    this.paginatedData = this.filteredBranches.slice(start, end);
  }

  ngOnInit() {
    this.totalRecords = this.filteredBranches.length;
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

  // filters
  applyFilters() {
    this.filteredBranches = this.tableData.filter((branch) => {
      const matchesSearch = this.searchTerm
        ? branch.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;

      const matchesStatus = this.selectedStatus
        ? branch.status === this.selectedStatus
        : true;

      const matchesPerformance = this.selectedPerformance
        ? branch.performance === this.selectedPerformance
        : true;

      return matchesSearch && matchesStatus && matchesPerformance;
    });

    this.totalRecords = this.filteredBranches.length;
    this.paginatedData = this.filteredBranches.slice(0, this.rows);
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

import { ChangeDetectorRef, Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { SelectorComponent } from '../../ui/selector/selector.component';
import { SwitchInputComponent } from '../../ui/switch-input/switch-input.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../ui/input/input.component';
import { FormsModule } from '@angular/forms';
import { ConfirmdeleteComponent } from '../../ui/confirmdelete/confirmdelete.component';
import { ConfirmactivationComponent } from '../../ui/confirmactivation/confirmactivation.component';

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
    ConfirmdeleteComponent,
    ConfirmactivationComponent,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  isModalOpen = false;
  currentModal: 'formContainer' | null = null;

  // Array of service cards
  serviceCards = [
    {
      id: 1,
      title: 'الاعتماد المهني للمهندسين',
      switchState: true,
      branches: ['فرع 1', 'فرع 2', 'فرع 3'],
      status: 'active',
    },
    {
      id: 2,
      title: 'خدمة أخرى',
      switchState: false,
      branches: ['فرع 4', 'فرع 5'],
      status: 'inactive',
    },
    {
      id: 3,
      title: 'خدمة ثالثة',
      switchState: true,
      branches: ['فرع 6', 'فرع 7', 'فرع 8', 'فرع 9'],
      status: 'active',
    },
  ];

  statusOptions = [
    { value: 'active', label: 'مفعل' },
    { value: 'inactive', label: 'غير مفعل' },
    { value: '', label: 'الكل' },
  ];

  // Options for additional filter
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  selectedStatus: string = '';
  selectedValue?: string;
  searchTerm: string = '';

  filteredServiceCards = this.serviceCards;

  handleSwitchChange(index: number, state: boolean): void {
    this.serviceCards[index].switchState = state;
  }

  applySearch() {
    this.filteredServiceCards = this.serviceCards.filter((card) =>
      card.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
    this.applyFilters();
  }

  applyFilters() {
    let filtered = this.serviceCards;

    if (this.searchTerm) {
      filtered = filtered.filter((card) =>
        card.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
    }

    if (this.selectedStatus) {
      filtered = filtered.filter((card) => card.status === this.selectedStatus);
    }

    this.filteredServiceCards = filtered;
  }

  onSubmitForm() {
    console.log('submit');
  }

  closeModal() {
    this.isModalOpen = false;
    this.currentModal = null;
  }

  openModal(modalId: any) {
    this.isModalOpen = true;
    this.currentModal = modalId;
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
      this.serviceCards = this.serviceCards.filter(
        (card) => card !== this.itemToDelete,
      );
      this.applyFilters();
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
      this.itemToActivate.switchState = true;
      this.showActivationModal = false;
      this.itemToActivate = null;
    }
  }

  closeActivationModal() {
    this.showActivationModal = false;
    this.itemToActivate = null;
  }
}

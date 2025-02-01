import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-an-appointment',
  standalone: true,

  imports: [
    TranslateModule,
    RouterLinkActive,
    CommonModule,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './choose-an-appointment.component.html',
  styleUrls: ['./choose-an-appointment.component.css'],
})
export class ChooseAnAppointmentComponent {
  @ViewChild('submit-msg-container') submitMsg!: ElementRef;

  activeButton: number = 0;
  days: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
  translatedDays: string[] = [];
  currentLang: string = 'ar';
  data: any = {};
  currentData: any[] = [];

  constructor(
    private translateService: TranslateService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.currentLang = document.documentElement.lang || 'en';
    this.translateService.use(this.currentLang);

    this.translateService.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      this.updateDays();
      this.updateData();
    });

    this.updateDays();
    this.loadData();
  }

  setActiveButton(index: number): void {
    this.activeButton = index;
    this.updateData();
  }

  loadData(): void {
    this.http.get('data/appointments.json').subscribe((response: any) => {
      this.data = response;
      this.updateData();
    });
  }

  updateDays(): void {
    this.translatedDays = this.days.map((dayKey) =>
      this.translateService.instant(`days.${dayKey}`),
    );
  }

  updateData(): void {
    if (!this.data[this.currentLang]) return;

    const keysEn = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
    const keysAr = ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس'];

    const selectedDayKey =
      this.currentLang === 'en'
        ? keysEn[this.activeButton]
        : keysAr[this.activeButton];

    this.currentData = this.data[this.currentLang][selectedDayKey] || [];
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    const step3 = document.querySelector('.step-3');
    const msgContainer = document.querySelector('.submit-msg-container');

    const spanToRemove = step3?.querySelector('span');
    spanToRemove?.remove();
    const span = document.createElement('span');
    const newImg = document.createElement('img');
    msgContainer?.classList.add('active-msg');
    newImg.src = '/assets/step-icon.svg';
    newImg.alt = 'step-icon';
    span?.appendChild(newImg);
    step3?.appendChild(span);
    const element = document.querySelector('.submit-msg') as HTMLElement;
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  }
}

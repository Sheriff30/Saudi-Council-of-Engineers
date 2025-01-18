import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previous-appointments',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './previous-appointments.component.html',
  styleUrls: ['./previous-appointments.component.css'],
})
export class PreviousAppointmentsComponent {
  currentLang: string = 'ar';
  appointments: any[] = [];
  currentPage: number = 1;
  appointmentsPerPage: number = 4;
  totalPages: number = 0;

  constructor(
    private translateService: TranslateService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang || 'ar';
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
      this.loadData();
    });

    this.loadData();
  }

  loadData(): void {
    this.http.get('/data/prev-appointments.json').subscribe((response: any) => {
      this.appointments = response[this.currentLang];
      this.totalPages = Math.ceil(
        this.appointments.length / this.appointmentsPerPage,
      );
      this.updateData();
    });
  }

  updateData(): void {
    this.currentPage = 1;
  }

  paginate(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getPaginatedAppointments(): any[] {
    const startIndex = (this.currentPage - 1) * this.appointmentsPerPage;
    return this.appointments.slice(
      startIndex,
      startIndex + this.appointmentsPerPage,
    );
  }

  getPaginationRange(): number[] {
    const range = [];
    for (let i = 1; i <= this.totalPages; i++) {
      range.push(i);
    }
    return range;
  }
}

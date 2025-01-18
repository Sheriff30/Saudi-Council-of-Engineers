import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  currentLang: string = 'ar';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }
}

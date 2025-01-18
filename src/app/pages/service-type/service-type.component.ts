import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-service-type',
  standalone: true,
  imports: [TranslateModule, RouterLinkActive, CommonModule, RouterLink],
  templateUrl: './service-type.component.html',
  styleUrl: './service-type.component.css',
})
export class ServiceTypeComponent {
  activeButton: number | null = null;

  setActiveButton(index: number): void {
    this.activeButton = index;
  }

  currentLang: string = 'ar';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }
}

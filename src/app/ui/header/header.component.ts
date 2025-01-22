import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule, CommonModule, RouterLink, RouterLinkActive],
  standalone: true,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  title = 'council-of-engineering';
  translate: TranslateService = inject(TranslateService);

  currentLang: 'en' | 'ar' = 'ar';

  constructor() {}

  ngOnInit(): void {
    const savedLang = localStorage.getItem('currentLang') as 'en' | 'ar';
    this.currentLang = savedLang || 'ar';
    this.applyLanguageSettings(this.currentLang);
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('currentLang', this.currentLang);
    this.applyLanguageSettings(this.currentLang);
  }

  private applyLanguageSettings(lang: 'en' | 'ar') {
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }

  toggleMobileMenu() {
    const mobileList = document.querySelector('.mobile-list') as HTMLElement;
    if (mobileList) {
      mobileList.classList.toggle('hidden');
    }
  }
}

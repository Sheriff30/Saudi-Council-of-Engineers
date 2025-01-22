import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-virtual-visit',
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './virtual-visit.component.html',
  standalone: true,

  styleUrl: './virtual-visit.component.css',
})
export class VirtualVisitComponent {
  currentLang: string = 'ar';

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang || 'en';
    this.translateService.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }
}

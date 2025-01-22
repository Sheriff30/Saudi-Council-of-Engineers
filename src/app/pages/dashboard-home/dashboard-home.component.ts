import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TabsModule } from 'primeng/tabs';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';

import { Select } from 'primeng/select';
import { DatePickerComponent } from '../../ui/date-picker-component/date-picker-component.component';

interface Selector {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    CommonModule,
    IconFieldModule,
    InputIconModule,
    TabsModule,
    FormsModule,
    ChartModule,
    DatePickerComponent,
    Select,
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
})
export class DashboardHomeComponent implements OnInit {
  branches: Selector[] | undefined;
  selectedbranch: Selector | undefined;
  branches2: Selector[] | undefined;
  selectedbranch2: Selector | undefined;
  services: Selector[] | undefined;
  selectedservice: Selector | undefined;
  basicData: any;
  basicOptions: any;
  private weekdays: string[] = [
    'الأحد',
    'الاثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ];
  private months: string[] = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];

  ngOnInit() {
    this.branches = [
      { name: 'الفرع 1', code: 'الفرع 1' },
      { name: 'الفرع 2', code: 'الفرع 2' },
      { name: 'الفرع 3', code: 'الفرع 3' },
      { name: 'الفرع 4', code: 'الفرع 4' },
    ];
    this.branches2 = [
      { name: 'الفرع 1', code: 'الفرع 1' },
      { name: 'الفرع 2', code: 'الفرع 2' },
      { name: 'الفرع 3', code: 'الفرع 3' },
      { name: 'الفرع 4', code: 'الفرع 4' },
    ];
    this.services = [
      { name: 'خدمة 1', code: 'خدمة 1' },
      { name: 'خدمة 2', code: 'خدمة 2' },
      { name: 'خدمة 3', code: 'خدمة 3' },
      { name: 'خدمة 4', code: 'خدمة 4' },
    ];

    this.basicData = {
      labels: [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر',
      ],
      datasets: [
        {
          data: [30, 40, 50, 20, 30, 40, 50, 20, 110, 100, 90, 100],
          backgroundColor: [
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
            '#D8A652',
          ],
          borderRadius: 100,
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          display: false,

          labels: {
            color: 'red',
          },
        },
        title: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#3F5372',

            font: {
              size: 12,
              weight: 700,
              family: 'cairo, sans-serif',
            },
          },
          grid: {
            color: '',
          },
        },
        y: {
          beginAtZero: true,
          color: '#223042',
          ticks: {
            font: {
              size: 12,
              weight: 700,
              family: 'cairo, sans-serif',
            },
          },
          grid: {
            color: '#E4E4E4',
          },
          border: {
            display: false,
            dash: [3, 3],
          },
        },
      },
    };
  }
}

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
  options: Selector[] | undefined;
  selectedoptions: Selector | undefined;

  years = [
    { name: 'سنة 2020', value: 'سنة 2020' },
    { name: 'سنة 2021', value: 'سنة 2021' },
    { name: 'سنة 2022', value: 'سنة 2022' },
    { name: 'سنة 2023', value: 'سنة 2023' },
    { name: 'سنة 2025', value: 'سنة 2025' },
  ];
  selectedYear: any = null;
  services = [
    { name: 'خدمة 1', value: 'خدمة 1' },
    { name: 'خدمة 2', value: 'خدمة 2' },
  ];
  selectedservice: any = null;
  chartbranches = [
    { name: 'فرع الرياض', value: 'رياض' },
    { name: 'فرع جدة', value: 'جدة' },
  ];
  selectedchartbranch: any = null;

  branches = [
    { name: 'فرع الرياض', value: 'رياض' },
    { name: 'فرع جدة', value: 'جدة' },
    { name: 'فرع الدمام', value: 'دمام' },
  ];

  defaultReservationsDate = '2025-10-01';
  selectedBranch: any = null;
  filteredDayCardData: any[] = [];
  filteredWeekCardData: any[] = [];
  filteredYearCardData: any[] = [];
  filteredReservationsData: any[] = [];
  filteredReservationsData2: any[] = [];
  filteredReservationsData3: any[] = [];
  filteredReservationsData4: any[] = [];
  selectedDate: string = '';
  selectedReservationsDate: any = null;

  dayCardData = [
    {
      branch: 'فرع الرياض',
      date: '2023-10-01',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '10 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      branch: 'فرع جدة',
      date: '2023-10-02',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '25 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '40 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '12 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '8 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
  ];
  weekCardData = [
    {
      branch: 'فرع الرياض',
      week: 'الاسبوع الأول',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '10 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      branch: 'فرع الرياض',
      week: 'الاسبوع الثاني',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '10 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      branch: 'فرع الرياض',
      week: 'الاسبوع الثالث',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '10 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      branch: 'فرع جدة',
      week: 'الاسبوع الاول',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '25 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '40 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '12 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '8 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
  ];
  yearCardData = [
    {
      branch: 'فرع الرياض',
      year: 'سنة 2023',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '10 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      branch: 'فرع الرياض',
      year: 'سنة 2024',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '10 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      branch: 'فرع الرياض',
      year: 'سنة 2025',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '10 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      branch: 'فرع جدة',
      year: 'سنه 2025',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '25 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '40 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '12 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
        {
          title: 'المواعيد الملغاة :',
          value: '8 موعد',
          type: 'cancelled',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
  ];

  reservationsCardData = [
    {
      date: '2025-10-01',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      date: '2025-10-02',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '25 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '40 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '12 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
  ];
  reservationsCardData2 = [
    {
      date: '2025-10-01',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '40 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      date: '2025-10-02',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '25 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '40 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '12 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
  ];
  reservationsCardData3 = [
    {
      date: '2025-10-01',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '50 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      date: '2025-10-02',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '25 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '40 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '12 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
  ];
  reservationsCardData4 = [
    {
      date: '2025-10-01',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '30 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '50 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '16 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
    {
      date: '2025-10-02',
      cards: [
        {
          title: 'عدد المواعيد القادمة:',
          value: '10 موعد',
          type: 'upcoming',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المجدولة:',
          value: '40 موعد',
          type: 'scheduled',
          trend: 'up',
          trendValue: 'Default',
        },
        {
          title: 'عدد المواعيد المنتهية:',
          value: '12 موعد',
          type: 'completed',
          trend: 'down',
          trendValue: '28.4%',
        },
      ],
    },
  ];
  basicData = {
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

  basicOptions = {
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

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData() {
    this.selectedBranch = this.branches[0];
    this.selectedReservationsDate = this.defaultReservationsDate;
    this.filterCards();
    this.reservationsfilterCards();
    this.selectedYear = this.years[0];
    this.selectedservice = this.services[0];
    this.selectedchartbranch = this.chartbranches[0];
  }
  onDateChange(date: string) {
    this.selectedDate = date;
    this.filterCards();
  }
  onReservationsDateChange(date: string) {
    this.selectedReservationsDate = date;
    this.reservationsfilterCards();
  }

  filterCards() {
    this.filteredDayCardData = this.dayCardData.filter((group) => {
      const matchesBranch = this.selectedBranch
        ? group.branch.includes(this.selectedBranch.value)
        : true;
      const matchesDate = this.selectedDate
        ? group.date === this.selectedDate
        : true;
      return matchesBranch && matchesDate;
    });
    this.filteredWeekCardData = this.weekCardData.filter((group) => {
      const matchesBranch = this.selectedBranch
        ? group.branch.includes(this.selectedBranch.value)
        : true;
      return matchesBranch;
    });
    this.filteredYearCardData = this.yearCardData.filter((group) => {
      const matchesBranch = this.selectedBranch
        ? group.branch.includes(this.selectedBranch.value)
        : true;
      return matchesBranch;
    });
  }
  reservationsfilterCards() {
    this.filteredReservationsData = this.reservationsCardData.filter(
      (group) => {
        const matchesDate = this.selectedReservationsDate
          ? group.date === this.selectedReservationsDate
          : true;
        return matchesDate;
      },
    );
    this.filteredReservationsData2 = this.reservationsCardData2.filter(
      (group) => {
        const matchesDate = this.selectedReservationsDate
          ? group.date === this.selectedReservationsDate
          : true;
        return matchesDate;
      },
    );
    this.filteredReservationsData3 = this.reservationsCardData3.filter(
      (group) => {
        const matchesDate = this.selectedReservationsDate
          ? group.date === this.selectedReservationsDate
          : true;
        return matchesDate;
      },
    );
    this.filteredReservationsData4 = this.reservationsCardData4.filter(
      (group) => {
        const matchesDate = this.selectedReservationsDate
          ? group.date === this.selectedReservationsDate
          : true;
        return matchesDate;
      },
    );
  }

  updateChartData() {
    const newData = this.fetchData(
      this.selectedchartbranch?.value,
      this.selectedservice?.value,
      this.selectedYear?.value,
    );

    this.basicData.datasets[0].data = newData;

    this.basicData = { ...this.basicData };
  }

  fetchData(
    branch: string | undefined,
    service: string | undefined,
    month: string | undefined,
  ): number[] {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
  }

  onDropdownChange() {
    this.updateChartData();
  }
}

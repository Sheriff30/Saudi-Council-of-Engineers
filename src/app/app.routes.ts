import { Routes } from '@angular/router';
import { VirtualVisitComponent } from './pages/virtual-visit/virtual-visit.component';
import { LoginComponent } from './pages/login/login.component';
import { ServiceTypeComponent } from './pages/service-type/service-type.component';
import { ChooseAnAppointmentComponent } from './pages/choose-an-appointment/choose-an-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { PreviousAppointmentsComponent } from './pages/previous-appointments/previous-appointments.component';
import { UpcomingAppointmentsComponent } from './pages/upcoming-appointments/upcoming-appointments.component';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './ui/main-layout/main-layout.component';
import { DashboardLayoutComponent } from './ui/dashboard-layout/dashboard-layout.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { SupervisorsandemployeesComponent } from './pages/supervisorsandemployees/supervisorsandemployees.component';
import { AdministratorDataComponent } from './pages/administrator-data/administrator-data.component';
import { EmployeeDataComponent } from './pages/employee-data/employee-data.component';
import { BranchdataComponent } from './pages/branchdata/branchdata.component';
import { AddnewbranchComponent } from './pages/addnewbranch/addnewbranch.component';
import { ServicesComponent } from './pages/services/services.component';
import { ManagingworkschedulesComponent } from './pages/managingworkschedules/managingworkschedules.component';
import { BookingappointmentmanagementComponent } from './pages/bookingappointmentmanagement/bookingappointmentmanagement.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: VirtualVisitComponent },
      { path: 'login', component: LoginComponent },
      { path: 'service-type', component: ServiceTypeComponent },
      { path: 'appointment', component: ChooseAnAppointmentComponent },
      { path: 'appointment-list', component: AppointmentListComponent },
      {
        path: 'previous-appointments',
        component: PreviousAppointmentsComponent,
      },
      {
        path: 'upcoming-appointments',
        component: UpcomingAppointmentsComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      {
        path: 'supervisorsandemployees',
        component: SupervisorsandemployeesComponent,
      },
      {
        path: 'administratordata',
        component: AdministratorDataComponent,
      },
      {
        path: 'employeedata',
        component: EmployeeDataComponent,
      },
      {
        path: 'branchdata',
        component: BranchdataComponent,
      },
      {
        path: 'addnewbranch',
        component: AddnewbranchComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'managingworkschedules',
        component: ManagingworkschedulesComponent,
      },
      {
        path: 'bookingappointmentmanagement',
        component: BookingappointmentmanagementComponent,
      },
    ],
  },
];

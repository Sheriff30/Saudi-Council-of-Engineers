import { Routes } from '@angular/router';
import { VirtualVisitComponent } from './pages/virtual-visit/virtual-visit.component';
import { LoginComponent } from './pages/login/login.component';
import { ServiceTypeComponent } from './pages/service-type/service-type.component';
import { ChooseAnAppointmentComponent } from './pages/choose-an-appointment/choose-an-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { PreviousAppointmentsComponent } from './pages/previous-appointments/previous-appointments.component';
import { UpcomingAppointmentsComponent } from './pages/upcoming-appointments/upcoming-appointments.component';

export const routes: Routes = [
  { path: '', component: VirtualVisitComponent },
  { path: 'login', component: LoginComponent },
  { path: 'service-type', component: ServiceTypeComponent },
  { path: 'appointment', component: ChooseAnAppointmentComponent },
  { path: 'appointment-list', component: AppointmentListComponent },
  { path: 'previous-appointments', component: PreviousAppointmentsComponent },
  { path: 'upcoming-appointments', component: UpcomingAppointmentsComponent },
];

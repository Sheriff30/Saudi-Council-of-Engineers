import { Routes } from '@angular/router';
import { VirtualVisitComponent } from './pages/virtual-visit/virtual-visit.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: VirtualVisitComponent },
  { path: 'login', component: LoginComponent },
];

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event, form: any) {
    event.preventDefault();

    if (form.valid) {
      alert('Form is valid. Navigating to another page.');
      this.router.navigate(['/service-type']);
    } else {
      alert('Form is invalid. Please fill out the required fields.');
    }
  }
}

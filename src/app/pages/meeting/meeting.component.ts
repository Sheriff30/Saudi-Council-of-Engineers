import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meeting',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css',
})
export class MeetingComponent {}

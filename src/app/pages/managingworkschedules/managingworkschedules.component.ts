import { Component } from '@angular/core';
import { SwitchInputComponent } from '../../ui/switch-input/switch-input.component';
import { InputComponent } from '../../ui/input/input.component';
import { TimeinputComponent } from '../../ui/timeinput/timeinput.component';
import { DateinputComponent } from '../../ui/dateinput/dateinput.component';
import { InputfileuploadComponent } from '../../ui/inputfileupload/inputfileupload.component';

@Component({
  selector: 'app-managingworkschedules',
  imports: [
    SwitchInputComponent,
    InputComponent,
    TimeinputComponent,
    DateinputComponent,
    InputfileuploadComponent,
  ],
  standalone: true,
  templateUrl: './managingworkschedules.component.html',
  styleUrl: '../addnewbranch/addnewbranch.component.css',
})
export class ManagingworkschedulesComponent {
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  switchState: { [key: string]: boolean } = {
    switch1: true,
    switch2: true,
    sun: true,
    mon: true,
    tues: true,
    wed: true,
    thur: true,
    holiday1: true,
    holiday2: false,
  };

  handleSwitchChange(location: string, newState: boolean) {
    this.switchState[location] = newState;
  }
}

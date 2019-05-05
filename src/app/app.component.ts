import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Employees';
  
  public clickedEmployee: Employee;

  childEventClicked(employee: Employee) {

    this.clickedEmployee = employee;
  }

}

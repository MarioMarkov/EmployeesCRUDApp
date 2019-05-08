import { Component, OnInit} from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[];

  selectedEmployee: Employee;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees()
    .subscribe(employees=> this.employees = employees)
    

  }

  removeEmployee(employee:Employee){
    this.employees = this.employees.filter(e=> e !== employee);
    this.employeeService.removeEmployee(employee).subscribe();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    
  }
  
}

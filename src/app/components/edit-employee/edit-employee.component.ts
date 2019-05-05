import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee:Employee
  showForm:boolean = false;
  
  constructor(
    private employeeService:EmployeeService
  ) { }

  ngOnInit() {
    
  }

  save():void{
   
      this.employeeService.updateEmployee(this.employee)
      console.log(this.employee);
      this.employee = null;
  }
  
}

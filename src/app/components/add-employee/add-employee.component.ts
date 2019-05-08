import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/Employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService,
    private location:Location) { }

  ngOnInit() {
  }

  add(name: string,age:number,gender:string): void {
    name = name.trim();
    if (!name) { return; }
    this.employeeService.addEmployee({ name,age,gender } as Employee)
      .subscribe(employee => {
        this.employeeService.addEmployee(employee);
      });

    this.location.back();
  }
}

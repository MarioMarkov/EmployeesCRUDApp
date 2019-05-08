import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee:Employee
  
  
  constructor(
    private employeeService:EmployeeService,
    private route:ActivatedRoute,
    private location:Location) { }

  ngOnInit() {
    this.getEmployee();
  }

  save():void{
   
      this.employeeService.updateEmployee(this.employee)
      .subscribe(employee=> this.employee = employee)
      console.log(this.employeeService);
      this.goBack();
  }
  
  getEmployee():void{
  //plus to make it a number from a string
  const id = +this.route.snapshot.paramMap.get('id');
  this.employeeService.getEmployee(id)
  .subscribe(employee=>
    this.employee = employee)
  }

  goBack(): void {
    this.location.back();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../models/Employee';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  
  
  
  private employeeUrl ='api/employees'

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeUrl)
  }
  getEmployee(id:number):Observable<Employee>{
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<Employee>(url);
  }
  removeEmployee(employee : Employee|number){
    const id = typeof employee === 'number'? employee:employee.id;
    const url = `${this.employeeUrl}/${id}`;
    return this.http.delete<Employee>(url,httpOptions)
  }

  updateEmployee(employee: Employee):Observable<any> {
    return this.http.put(this.employeeUrl,employee,httpOptions);
  }
  addEmployee(employee: Employee) :Observable<Employee>{
    return this.http.post<Employee>(this.employeeUrl, employee, httpOptions)
  }
}

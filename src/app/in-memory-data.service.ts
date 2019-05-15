import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const employees = [
      { id:1,name:'John Adams',age:24,gender:'male' },
      { id:2,name:'Olivia Stewart',age:26,gender:'female' },
      { id:3,name:'Henry Glover',age:28,gender:'male' },
      

    ];
    return {employees};
    
  }
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
  }
  constructor() { }
}

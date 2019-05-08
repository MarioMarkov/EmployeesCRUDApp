import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

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
  constructor() { }
}

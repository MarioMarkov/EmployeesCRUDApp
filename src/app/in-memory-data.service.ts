import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
  createDb() {
    const employees = [
      { id:1,name:'John',age:24,gender:'male' },
      { id:1,name:'Jo',age:26,gender:'male' },
      { id:1,name:'Henry',age:28,gender:'male' },
      { id:1,name:'Mary',age:44,gender:'female' },

    ];
    return {employees};
    
  }
  constructor() { }
}

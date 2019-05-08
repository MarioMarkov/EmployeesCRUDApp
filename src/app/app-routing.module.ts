import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EditEmployeeComponent } from '../app/components/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from '../app/components/add-employee/add-employee.component'
const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'edit/:id', component: EditEmployeeComponent },
  { path: 'add', component: AddEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent} from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employees.component';


export const routes: Routes = [
    { path: '', redirectTo: 'employees', pathMatch: "full"},
    { path: 'employees', component: EmployeesComponent },
    { path: 'add-employee', component: EmployeesComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }
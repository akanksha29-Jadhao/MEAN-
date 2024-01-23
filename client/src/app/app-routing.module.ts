import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent} from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employees.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '', redirectTo : 'employees', pathMatch : 'full'

    },
    { path : 'employees', component : EmployeesComponent},
    {  path : 'addEmployee', component : AddEmployeeComponent },
    { path:'register',component:RegisterComponent },
    { path:'login',component:LoginComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { UsersComponent } from './employees/employees.component';
import { EmployeesComponent } from './employees/employees.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  Employees: any = [];

  newEmployee = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient) {
  }

  getEmployees() {
    this.http.get('http://localhost:3000/employees').subscribe({
      next: (res: any) => {
        console.log(res);

        this.Employees = res.employees;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  createEmployee() {
    this.http.post('http://localhost:3000/employees', this.newEmployee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newEmployee.firstName = '';
        this.newEmployee.lastName = '';
        this.getEmployees();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  deleteEmployee(id: any) {
    this.http.delete('http://localhost:3000/employees/' + id).subscribe({
      next: (res: any) => {
        this.getEmployees();
      },
      error: (err: any) => {
      },
    });
  }
}

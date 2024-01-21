import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employees.component.html',
  styleUrl: './add-employees.component.scss'
})
export class AddEmployeeComponent {

  newEmployee = {
    firstName: '',
    lastName: '',
  }
  newEmployees: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  createEmployee() {
    this.http.post('http://localhost:3000/employees', this.newEmployees).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newEmployee.firstName = '';
        this.newEmployee.lastName = '';
      },
      error: (err) => {
        console.log(err);
      },
    })
  }


goToViewEmployees() {
  this.router.navigate(['/employees']);
}
}
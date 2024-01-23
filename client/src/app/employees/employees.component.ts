import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
goTocreateEmployee() {
throw new Error('Method not implemented.');
}
  employees: any = [];
 


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  goToAddEmployee() {
    this.router.navigate(['/addEmployee']);
  }

  getEmployees() {
    this.http.get('http://localhost:3000/employees').subscribe({
      next: (res: any) => {
        console.log(res);

        this.employees = res.employees;
        console.log(this.employees);
        
      },
      error: (err) => {
        console.log(err);
      }
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



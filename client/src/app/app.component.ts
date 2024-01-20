import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users: any = [];

  newUser = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient) {
  }

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe({
      next: (res: any) => {
        console.log(res);

        this.users = res.users;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  createUser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newUser.firstName = '';
        this.newUser.lastName = '';
        this.getUsers();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  deleteUser(id: any) {
    this.http.delete('http://localhost:3000/users/' + id).subscribe({
      next: (res: any) => {
        this.getUsers();
      },
      error: (err: any) => {
      },
    });
  }
}

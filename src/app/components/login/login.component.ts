import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {

  }
  login() {
    console.log('login action');
    localStorage.setItem("token", Math.random().toString());
    this.router.navigate(['dashboard']);
  }
}

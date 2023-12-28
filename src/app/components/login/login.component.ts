import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: String = ''
  password: string = ''

  constructor(private router: Router) {
    console.log("loginnnn")
  }
  
  ngOnInit(): void {

  }

  login() {
    console.log('login action');
    // localStorage.setItem("token", Math.random().toString());
    // this.router.navigate(['dashboard']);
  }
}

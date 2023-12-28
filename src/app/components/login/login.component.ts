import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core'; // Import ErrorStateMatcher

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  // Định nghĩa matcher là một đối tượng ErrorStateMatcher mới
  matcher = new ErrorStateMatcher();

  constructor(private router: Router) {}
  
  login() {
    console.log('login action');
    // localStorage.setItem("token", Math.random().toString());
    // this.router.navigate(['dashboard']);
  }
}

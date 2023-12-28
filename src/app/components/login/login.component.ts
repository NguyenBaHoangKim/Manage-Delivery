import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core'; // Import ErrorStateMatcher
import { UsersServiceService } from '../../services/users-service.service';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  mymodel:string="";
  username: string="";
  password: string="";
  
  matcher = new ErrorStateMatcher();

  constructor(private router: Router,private user: UsersServiceService) {}
  
    ngOnInit(): void {
      this.login('example@email.com', 'password123');
    }
  login(email: string, password: string): void {
    console.log('login action');
    console.log(this.username +"  "+ this.password)
    // localStorage.setItem("token", Math.random().toString());
    // this.router.navigate(['dashboard']);
      this.user.login(email, password).subscribe(
        (result) => {
          console.log('Đăng nhập thành công', result);
          // this.router.navigate(['/boss-manager']);
        },
        (error) => {
          console.error('Đăng nhập thất bại', error);
          // this.router.navigate(['/head-service-manage-account']);
        }
      );
    }
  }
  

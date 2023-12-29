import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core'; // Import ErrorStateMatcher
import { UsersServiceService } from '../../services/users-service.service';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Login } from '../../model/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new ErrorStateMatcher();


  loginData: Login = {
    email: '',
    password: '',
  };

  constructor(private router: Router, private userService: UsersServiceService, private auth: AuthService) {}

  ngOnInit() {}

  loginUser() {
    console.log(this.loginData)
    this.userService.login(this.loginData).subscribe(
      (result) => {
        console.log('Đăng nhập thành công', result);

        console.log("code id" + result.user.codeid)
        console.log(this.auth.getCodeId())

        this.auth.setToken(result.accessKey)
        this.auth.setCodeId(result.user.codeid)
        this.auth.setServiceAddressId(result.user.serviceAddressid)

        

        this.router.navigate(['/dashboard'])
      },
      (error) => {
        console.error('Đăng nhập thất bại', error);
      }
    );
  }
}

  
  
  

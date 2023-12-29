import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UsersServiceService } from '../../services/users-service.service';
import { AuthService } from '../../services/auth.service';
import { Register } from '../../model/user';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})

export class PopupComponent {
  registerData: Register = {
    codeid: 'hehehe',
    username: '',
    email: '',
    password: '',
    rePassword: '',
    phone_number: '',
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userManager: UsersServiceService, private auth: AuthService) {

   }

   regis() {
    console.log('call regis')
    console.log(this.registerData)
    this.userManager.register(this.registerData, this.auth.getServiceAddressId()).subscribe(
      (data) => {
        console.log('Registration success:', data);
        // Thực hiện các hành động sau khi đăng ký thành công
      },
      (error) => {
        console.error('Registration error:', error);
        // Thực hiện các hành động khi xảy ra lỗi đăng ký
      }
    );
   }

   

}
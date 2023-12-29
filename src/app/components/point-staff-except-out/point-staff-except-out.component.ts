import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-point-staff-except-out',
  templateUrl: './point-staff-except-out.component.html',
  styleUrl: './point-staff-except-out.component.scss'
})
export class PointStaffExceptOutComponent {

constructor(private auth: AuthService) {}

push() {
this.auth.setToken("")
console.log("token :" +this.auth.getToken())
}
}

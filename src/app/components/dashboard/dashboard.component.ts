import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor( private router: Router) {
    console.log('dashboard');
  }
  logout() {
    const confirmation = confirm("Thoát ra bây giờ ưưưưưư");
    if (confirmation === true) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }
}

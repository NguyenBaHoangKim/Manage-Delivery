import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app2';
  currentRoute: string;
  showNav = true

  constructor(private router: Router) {
    this.currentRoute = "";


    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        let event_x = event as NavigationEnd
        this.currentRoute = event_x.url
        if (this.currentRoute == '/log-in') {
          this.showNav = false
        } else {
          this.showNav = true
        }
        console.log(this.showNav)
      });

  }


}

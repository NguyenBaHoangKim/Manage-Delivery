import { Component } from '@angular/core';
import { BossRes } from '../../model/user';
import { BossManagerService } from '../../services/boss-manager.service';

@Component({
  selector: 'app-boss-manager',
  templateUrl: './boss-manager.component.html',
  styleUrl: './boss-manager.component.scss'
})
export class BossManagerComponent {
  data: BossRes[]

  constructor(private boss: BossManagerService){
    this.data = [
      
    ]
  }

  ngOnInit() :void {
    this.getBossData()
  }

getBossData() {
  this.boss.getBossData().subscribe(
    (data) => {
      this.data = data;
      console.log('Data:', this.data);
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}
}


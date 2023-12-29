import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../model/user';
import { PopupComponent } from '../popup/popup.component';
import { UsersServiceService } from '../../services/users-service.service';
// import { MatDialog } from '@angular/material/dialog';
// import { PopupComponent } from '../popup/popup.component'; // Đường dẫn đến PopupComponent

@Component({
  selector: 'app-head-service-manage-account',
  templateUrl: './head-service-manage-account.component.html',
  styleUrl: './head-service-manage-account.component.scss'
})
export class HeadServiceManageAccountComponent {
  constructor(private dialogRef: MatDialog, private user:UsersServiceService) {}
  users: User[] = [];
  openPopup(): void {
    console.log("được rồi nề")
    this.dialogRef.open(PopupComponent, {
      width: '600px',
      data: {}
    });
  }

  ngOnInit() {
    this.getlist()
  }

  getlist(){
    this.user.getListUser().subscribe(
      (orders: User[]) => {
        this.users = orders
        console.log( orders);
      },
      (error) => {
        console.log("loi roi huhuuuu");
        console.error(error);
      }
    )
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component'; // Đường dẫn đến PopupComponent
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-headerpointaccount',
  templateUrl: './headerpointaccount.component.html',
  styleUrls: ['./headerpointaccount.component.scss']
})
export class HeaderpointaccountComponent {

  constructor(private dialogRef: MatDialog, private user:UsersServiceService) {}
  user: User[] = [];
  openPopup(): void {
    console.log("được rồi nề")
    this.dialogRef.open(PopupComponent, {
      width: '600px',
      data: {}
    });
  }

  getlist(){
    this.user.getListUser().subscribe(
      (orders: User[]) => {
        this.user[] = orders
        console.log("hi  "+ orders);
      },
      (error) => {
        console.log("loi roi huhuuuu");
        console.error(error);
      }
    )
  }
}

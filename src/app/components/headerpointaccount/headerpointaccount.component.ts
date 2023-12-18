import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component'; // Đường dẫn đến PopupComponent

@Component({
  selector: 'app-headerpointaccount',
  templateUrl: './headerpointaccount.component.html',
  styleUrls: ['./headerpointaccount.component.scss']
})
export class HeaderpointaccountComponent {

  constructor(private dialogRef: MatDialog) {}
  accounts: any[] = [
    {
      employeeId: 'E123',
      fullName: 'Nguyen Van A',
      email: 'user1@example.com',
      phone: '012345678'
    },
    {
      employeeId: 'E124',
      fullName: 'Tran Thi B',
      email: 'user2@example.com',
      phone: '012345678'
    },
    {
      employeeId: 'E125',
      fullName: 'Le Van C',
      email: 'user3@example.com',
      phone: '012345678'
    },
    // Thêm các tài khoản khác vào đây
  ];
  openPopup(): void {
    console.log("được rồi nề")
    this.dialogRef.open(PopupComponent, {
      width: '600px',
      data: {}
    });
  }
}

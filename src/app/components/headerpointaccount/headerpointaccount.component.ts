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

  openPopup(): void {
    console.log("được rồi nề")
    this.dialogRef.open(PopupComponent, {
      width: '600px',
      data: {}
    });
  }
}

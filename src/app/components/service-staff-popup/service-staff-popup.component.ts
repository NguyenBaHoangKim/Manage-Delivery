import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-service-staff-popup',
  templateUrl: './service-staff-popup.component.html',
  styleUrls: ['./service-staff-popup.component.scss']
})
export class ServiceStaffPopupComponent {
  receivedData: any[]; // Biến để lưu trữ dữ liệu được truyền từ dialog mẹ

  constructor(
    @Inject(MAT_DIALOG_DATA) public userdata: any, // userdata chứa dữ liệu được truyền từ dialog mẹ
    private dialogRef: MatDialogRef<ServiceStaffPopupComponent>
  ) {
    this.receivedData = userdata; // Lưu dữ liệu vào biến receivedData để sử dụng trong popup
  }

  // Function để đóng dialog
  close(): void {
    this.dialogRef.close();
  }
}

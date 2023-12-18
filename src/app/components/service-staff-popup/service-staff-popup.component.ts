import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-service-staff-popup',
  templateUrl: './service-staff-popup.component.html',
  styleUrl: './service-staff-popup.component.scss'
})
export class ServiceStaffPopupComponent {
  dialogRef: any;
  constructor(@Inject(MAT_DIALOG_DATA) public userdata: any) {
   }

  close(): void {
    this.dialogRef.close();
  }

}

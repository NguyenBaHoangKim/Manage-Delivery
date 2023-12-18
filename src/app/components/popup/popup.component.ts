import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  dialogRef: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  close(): void {
    this.dialogRef.close();
  }
}

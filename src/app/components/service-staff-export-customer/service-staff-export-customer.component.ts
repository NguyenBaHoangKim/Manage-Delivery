import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceStaffPopupComponent } from '../service-staff-popup/service-staff-popup.component';

@Component({
  selector: 'app-service-staff-export-customer',
  templateUrl: './service-staff-export-customer.component.html',
  styleUrl: './service-staff-export-customer.component.scss'
})
export class ServiceStaffExportCustomerComponent {
  constructor(public dialogRef: MatDialog) {}
  userdata: any[] = [
    {
      id: 'E123',
      type: 'hang hoa',
      email: 'user1@example.com',
      phone: '012345678',
      status:'Trong kho',
    },
    // Thêm các tài khoản khác vào đây
  ];
  openPopup(): void {
    this.dialogRef.open(ServiceStaffPopupComponent, {
      width: '400px',
      data: this.userdata // Truyền dữ liệu vào popup thông qua thuộc tính 'data'
    });
  }
}

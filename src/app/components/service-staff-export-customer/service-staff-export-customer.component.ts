import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceStaffPopupComponent } from '../service-staff-popup/service-staff-popup.component';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-service-staff-export-customer',
  templateUrl: './service-staff-export-customer.component.html',
  styleUrl: './service-staff-export-customer.component.scss'
})
export class ServiceStaffExportCustomerComponent {
  id: string = ''
  constructor(public dialogRef: MatDialog,private oder: OrderService) {}


  fetchdata() {
    this.oder.getOrderDone(this.id)
    .subscribe(
      (tbao: string) => {
        alert(tbao)
        console.log('Đơn hàng đã được cập nhật:', tbao);
      },
      (error) => {
        console.error('Lỗi khi cập nhật đơn hàng:', error);
      }
    );
  }

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

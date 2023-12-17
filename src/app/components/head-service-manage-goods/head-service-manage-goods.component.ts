import { Component } from '@angular/core';

@Component({
  selector: 'app-head-service-manage-goods',
  templateUrl: './head-service-manage-goods.component.html',
  styleUrl: './head-service-manage-goods.component.scss'
})
export class HeadServiceManageGoodsComponent {
  searchCode: string = '';
  orders: any[] = [
    {
      orderId: 'XYZ123',
      orderName: 'ABC',
      time: '12:00 PM, 25/12/2023',
      location: 'HCMC, Vietnam',
      status: 'Đang giao hàng'
    },
    {
      orderId: 'XYZ123',
      orderName: 'ABC',
      time: '12:00 PM, 25/12/2023',
      location: 'HCMC, Vietnam',
      status: 'Đang giao hàng'
    },
    {
      orderId: 'XYZ123',
      orderName: 'ABC',
      time: '12:00 PM, 25/12/2023',
      location: 'HCMC, Vietnam',
      status: 'Đang giao hàng'
    },
    {
      orderId: 'XYZ123',
      orderName: 'ABC',
      time: '12:00 PM, 25/12/2023',
      location: 'HCMC, Vietnam',
      status: 'Đang giao hàng'
    },
  ];

  searchOrder() {
    // Thực hiện tìm kiếm đơn hàng dựa trên searchCode
    console.log('Search order function. Search code:', this.searchCode);
    // Logic tìm kiếm đơn hàng và cập nhật danh sách orders nếu cần
  }
}

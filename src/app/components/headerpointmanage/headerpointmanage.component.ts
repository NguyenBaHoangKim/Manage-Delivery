import { Component } from '@angular/core';

@Component({
  selector: 'app-headerpointmanage',
  templateUrl: './headerpointmanage.component.html',
  styleUrl: './headerpointmanage.component.scss'
})
export class HeaderpointmanageComponent {
  searchCode: string = '';
  orders: any[] = [ // Mảng chứa danh sách đơn hàng
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
    // {
    //   orderId: 'XYZ123',
    //   orderName: 'ABC',
    //   time: '12:00 PM, 25/12/2023',
    //   location: 'HCMC, Vietnam',
    //   status: 'Đang giao hàng'
    // },
    // Thêm các đơn hàng khác vào đây
  ];

  searchOrder() {
    // Thực hiện tìm kiếm đơn hàng dựa trên searchCode
    console.log('Search order function. Search code:', this.searchCode);
    // Logic tìm kiếm đơn hàng và cập nhật danh sách orders nếu cần
  }
  inHere() {
    console.log('Hang o day');
  }

  forword() {
    console.log('Hang vua chuyen di');
  }

  begin() {
    console.log('Hang sap toi');
  }
}

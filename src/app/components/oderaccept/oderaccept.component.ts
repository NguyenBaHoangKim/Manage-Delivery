import { Component } from '@angular/core';

@Component({
  selector: 'app-oderaccept',
  templateUrl: './oderaccept.component.html',
  styleUrl: './oderaccept.component.scss'
})
export class OderacceptComponent {
accept = { id: 'VD001', type: 'giấy tờ', status: 'đang đến' }; // Thông tin vận đơn

// {
//   orderId: 'XYZ123',
//   orderName: 'ABC',
//   time: '12:00 PM, 25/12/2023',
//   location: 'HCMC, Vietnam',
//   status: 'Đang giao hàng'
// },
// Thêm các đơn hàng khác vào đây
}
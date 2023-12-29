import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderReqUpdate } from '../../model/user';

@Component({
  selector: 'app-point-staff-creat-topoint',
  templateUrl: './point-staff-creat-topoint.component.html',
  styleUrl: './point-staff-creat-topoint.component.scss'
})
export class PointStaffCreatTopointComponent implements OnInit{
  orderId: string = '';
  position: string = '';

  constructor(private orderService: OrderService) {}

ngOnInit() {
}

  updateOrderPosition() {
    console.log('dang update')
    this.orderService.orderTrans(this.orderId, this.position)
      .subscribe(
        (updatedOrder: OrderReqUpdate) => {
          
          console.log('Đơn hàng đã được cập nhật:', updatedOrder);
        },
        (error) => {
          console.error('Lỗi khi cập nhật đơn hàng:', error);
        }
      );
  }
}

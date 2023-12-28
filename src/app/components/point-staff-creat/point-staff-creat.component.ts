import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../model/user';

@Component({
  selector: 'app-point-staff-creat',
  templateUrl: './point-staff-creat.component.html',
  styleUrl: './point-staff-creat.component.scss'
})
export class PointStaffCreatComponent implements OnInit{
  orderId: string = '';
  position: string = '';

  constructor(private orderService: OrderService) {}

ngOnInit() {
this.updateOrderPosition('1ff0a690-a350-11ee-8028-c1aef4fbdbdd','BCTX01')
}

  updateOrderPosition(orderId: string, position: string): void {
    console.log('dang update')
    this.orderService.orderTrans(orderId, position)
      .subscribe(
        (updatedOrder: Order) => {
          console.log('Đơn hàng đã được cập nhật:', updatedOrder);
        },
        (error) => {
          console.error('Lỗi khi cập nhật đơn hàng:', error);
        }
      );
  }
}

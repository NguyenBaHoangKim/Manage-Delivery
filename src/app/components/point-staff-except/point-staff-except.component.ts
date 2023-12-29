import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order, OrderReqUpdate } from '../../model/user';
import { AuthInterceptor } from '../../intercepter/auth.interceptor';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-point-staff-except',
  templateUrl: './point-staff-except.component.html',
  styleUrl: './point-staff-except.component.scss'
})
export class PointStaffExceptComponent implements OnInit{
  orderId: string = '';
  orders: OrderReqUpdate 

  constructor(private orderService: OrderService, private auth: AuthService) {
    this.orders = {
      orderId: '',
  status: '',
  serviceAddressId: '',
    }
  }

ngOnInit() {
}

  updateOrderPosition() {
    console.log('dang update')
    this.orderService.orderTrans(this.orderId, this.auth.getServiceAddressId())
      .subscribe(
        (updatedOrder: OrderReqUpdate) => {
          this.orders = updatedOrder
          console.log('Đơn hàng đã được cập nhật:', updatedOrder);
        },
        (error) => {
          console.error('Lỗi khi cập nhật đơn hàng:', error);
        }
      );
  }

}


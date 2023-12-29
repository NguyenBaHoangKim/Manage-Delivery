import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order, OrderReqUpdate } from '../../model/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-point-staff-creat',
  templateUrl: './point-staff-creat.component.html',
  styleUrl: './point-staff-creat.component.scss'
})
export class PointStaffCreatComponent implements OnInit{
  orderId: string = '';
  position: string = '';
  orders: OrderReqUpdate 

  constructor(private orderService: OrderService, private auth: AuthService) {
    this.orders = {
      orderId: '',
  status: '',
  serviceAddressId: '',
    }
  }

ngOnInit() {
// this.updateOrderPosition('1ff0a690-a350-11ee-8028-c1aef4fbdbdd','BCTX01')
}

  updateOrderPosition() {
    console.log('dang update')
    this.orderService.orderTrans(this.orderId, this.position)
      .subscribe(
        (updatedOrder: OrderReqUpdate) => {
          this.orders = updatedOrder
          console.log('Đơn hàng đã được cập nhật:', updatedOrder);
        },
        (error) => {
          console.error('Lỗi khi cập nhật đơn hàng:', error);
        }
      );

      // this.orderService.getOListOrderMove(this.auth.getServiceAddressId()).subscribe(
      //   (orders: Order[]) => {
      //     this.orders = orders
      //     console.log("hi  "+ orders);
      //   },
      //   (error) => {
      //     console.log("loi roi huhuuuu");
      //     console.error(error);
      //   }
      // )
  }

}

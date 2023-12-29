import { Component } from '@angular/core';
import { Order, OrderWithId } from '../../model/user';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-head-service-manage-goods',
  templateUrl: './head-service-manage-goods.component.html',
  styleUrl: './head-service-manage-goods.component.scss'
})
export class HeadServiceManageGoodsComponent {
  search: string = '';
  orders: Order[];
  constructor(private orderService: OrderService, private auth: AuthService) {
    this.orders = []
    console.log('hang ne' + this.orders)
    // console
  }

  ngOnInit(): void {
    // this.fetchOrders();
  }


  searchOrder() {
    // Thực hiện tìm kiếm đơn hàng dựa trên searchCode
    console.log('Search order function. Search code:');
    // Logic tìm kiếm đơn hàng và cập nhật danh sách orders nếu cần
  }

  inHere() {
    console.log('Hang o day (fetch)');
    // this.fetchOrders()
    this.orders = []
    console.log(this.auth.getServiceAddressId())
    this.orderService.getOListOrderHere(this.auth.getServiceAddressId()).subscribe(
      (orders: Order[]) => {
        this.orders = orders
        console.log("hi  "+ orders);
      },
      (error) => {
        console.log("loi roi huhuuuu");
        console.error(error);
      }
    )
  }

  forword() {
    console.log('Hang vua chuyen di');
    this.orders = []
    this.orderService.getOListOrderMove(this.auth.getServiceAddressId()).subscribe(
      (orders: Order[]) => {
        this.orders = orders
        console.log("hi  "+ orders);
      },
      (error) => {
        console.log("loi roi huhuuuu");
        console.error(error);
      }
    )
  }

  begin() {
    console.log('Hang sap toi');
    this.orders = []
    this.orderService.getOListOrderComing(this.auth.getServiceAddressId()).subscribe(
      (orders: Order[]) => {
        this.orders = orders
        console.log("hi  "+ orders);
      },
      (error) => {
        console.log("loi roi huhuuuu");
        console.error(error);
      }
    )
  }
}

import { Component } from '@angular/core';
import { Order } from '../../model/user';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-head-service-manage-goods',
  templateUrl: './head-service-manage-goods.component.html',
  styleUrl: './head-service-manage-goods.component.scss'
})
export class HeadServiceManageGoodsComponent {
  searchCode: string = '';
  // orders: any[] = [
  //   {
  //     orderId: 'XYZ123',
  //     orderName: 'ABC',
  //     time: '12:00 PM, 25/12/2023',
  //     location: 'HCMC, Vietnam',
  //     status: 'Đang giao hàng'
  //   },
  // ];
  orders: Order[];
  constructor(private orderService: OrderService) {
    this.orders = []
    console.log('hang ne' + this.orders)
    // console
  }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrdersHere("BCTX01").subscribe(
      (orders: Order[]) => {
        console.log("hi"+ orders);
        this.orders = orders
      },
      (error) => {
        console.log("loi getOrderHere roi huhuuuu");
        console.error(error);
      }
    );
  }

  searchOrder() {
    // Thực hiện tìm kiếm đơn hàng dựa trên searchCode
    console.log('Search order function. Search code:', this.searchCode);
    // Logic tìm kiếm đơn hàng và cập nhật danh sách orders nếu cần
  }
}

import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../model/user';
import { AuthInterceptor } from '../../auth.interceptor';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-point-staff-except',
  templateUrl: './point-staff-except.component.html',
  styleUrl: './point-staff-except.component.scss'
})
export class PointStaffExceptComponent implements OnInit {
  orders: Order[];
  constructor(private orderService: OrderService, private auth: AuthService ) {
    this.orders = []
    console.log("token: " + auth.getToken())
  }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrdersTest().subscribe(
      (orders: Order[]) => {
        this.orders = orders
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


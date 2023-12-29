import { Component, OnInit } from '@angular/core';
import { Order, OrderStatus, OrderWithId, User } from '../../model/user';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { UsersServiceService } from '../../services/users-service.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrl: './searching.component.scss'
})
export class SearchingComponent implements OnInit{
  orderId : string
  liststatus: OrderStatus[]

constructor(private orderService: OrderService ) {
  this.orderId = ""
  this.liststatus=[]
}

ngOnInit(): void {  

}

fetchOrderStatus(): void {
  this.orderService.getListOrderStatusWithId(this.orderId).subscribe(
    (data) => {
      this.liststatus = data;
      console.log('Order Status:', this.liststatus);
    },
    (error) => {
      console.error('Error fetching order status:', error);
    }
  );
}

}
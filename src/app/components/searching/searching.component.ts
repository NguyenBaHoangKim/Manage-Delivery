import { Component, OnInit } from '@angular/core';
import { Order, OrderWithId, User } from '../../model/user';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { UsersServiceService } from '../../services/users-service.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrl: './searching.component.scss'
})
export class SearchingComponent implements OnInit{
  orders: Order | undefined; // Khởi tạo và đặt giá trị ban đầu là null

constructor(private orderService: OrderService ) {
  this.orders
}

ngOnInit(): void {
  this.getOrderById("1ff0a690-a350-11ee-8028-c1aef4fbdbdd")   
}

getOrderById(orderId: string){
  this.orderService.getOrderWithId(orderId).subscribe(
      (returnObject: Order) => {
        this.orders = returnObject;
      },
      (error) => {
        console.error(error);
      }
    );
}
}
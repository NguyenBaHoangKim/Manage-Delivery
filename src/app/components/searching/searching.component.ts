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
  orders: Order | undefined; // Khởi tạo và đặt giá trị ban đầu là null
  liststatus: OrderStatus[]

constructor(private orderService: OrderService ) {
  this.orders;
  this.liststatus=[
  {
    status: 'Processing',
    date: '2023-12-28T10:00:00Z'
  },
  {
    status: 'Shipped',
    date: '2023-12-29T09:30:00Z'
  },
  {
    status: 'Delivered',
    date: '2023-12-30T13:45:00Z'
  }
];;
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
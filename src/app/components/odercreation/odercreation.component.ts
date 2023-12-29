import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderReq } from '../../model/user';

@Component({
  selector: 'app-odercreation',
  templateUrl: './odercreation.component.html',
  styleUrl: './odercreation.component.scss'
})
export class OdercreationComponent implements OnInit{
  newOrder: OrderReq = {
    namefrom : '',
    phonefrom : '',
    name : '',
    address : '',
    weight : 0,
    quantity : 0,
    nameto : '',
    phoneto : '',
    description : '',
  };
  // newOrder: OrderReq | undefined


  constructor(private order:OrderService){

  }
  ngOnInit() {
    // this.createNewOrder();
  }

  createNewOrder() {
    console.log(this.newOrder)
    this.order.postNewOrder(this.newOrder).subscribe(
      (response) => {
        console.log('Order created successfully:', response);
      },
      (error) => {
        console.error('Error creating order:', error);
      }
    );
  }

  submit(){
    console.log('submit')
    this.createNewOrder()
  }
}
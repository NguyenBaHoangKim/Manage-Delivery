import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderReq } from '../../model/user';

@Component({
  selector: 'app-odercreation',
  templateUrl: './odercreation.component.html',
  styleUrl: './odercreation.component.scss'
})
export class OdercreationComponent implements OnInit{
  name1:string=''
  phone1:string=''
  address:string=''
  type:string=''
  quantity:number = 0
  weight: number = 0
  name2:string=''
  phone2:string=''
  des:string=''

  newOrder: OrderReq | undefined


  constructor(private order:OrderService){

  }
  ngOnInit() {
    this.createNewOrder();
  }

  createNewOrder() {
    const newOrder: OrderReq = {
      namefrom : this.name1,
      phonefrom : this.phone1,
      name : this.type,
      address : this.address,
      weight : this.weight,
      quantity : this.quantity,
      nameto : this.name2,
      phoneto : this.phone2,
      description : this.des,
    };
    console.log(newOrder)
    this.order.postNewOrder(newOrder).subscribe(
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
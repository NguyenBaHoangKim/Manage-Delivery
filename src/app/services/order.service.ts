import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderWithId, EmployeeInfo, Order } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL : string = 'https://jsonplaceholder.typicode.com/users';
  listEmployee: EmployeeInfo[]
  listOrder: Order[]

  constructor(private http : HttpClient){
    this.listEmployee = []
    this.listOrder = []
  }
  ngOnInit() :void {
    this.orderTrans
  }

  getOrdersHere(serviceAddressId: string): Observable<Order[]> {
    const body = { serviceAddressId: serviceAddressId }; 

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: body,
    };
    console.log(options.body)
    return this.http.get<Order[]>('http://localhost:8080/api/v1/manager/here', options);
  }
  
  getOrdersTest(): Observable<Order[]> {
    console.log('dang test get order')
    return this.http.get<Order[]>(`https://postman-echo.com/get`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  getOrderWithId(orderId: string): Observable<Order> {
    const url = `http://localhost:8080/api/v1/orderStatus/${orderId}`;
    
    return this.http.get<Order>(url);
  }


 orderTrans(_orderId: string, _position: string): Observable<Order> {
  let body = {
    orderId: _orderId,
    serviceAddressId: _position,
  };
  console.log(body)
  return this.http.put<Order>(`http://localhost:8080/api/v1/orderStatus/update`, body, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }); 
}

postNewOrder(newOrder: Order): Observable<Order> {
  return this.http.post<Order>(`http://localhost:8080/new`, newOrder, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  });
}

}

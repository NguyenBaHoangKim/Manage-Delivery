import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { OrderWithId, EmployeeInfo, Order, OrderReq, OrderReqUpdate } from '../model/user';
import { environment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private URL : string = 'https://jsonplaceholder.typicode.com/users';
  listEmployee: EmployeeInfo[]
  listOrder: Order[]

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http : HttpClient){
    this.listEmployee = []
    this.listOrder = []
  }
  ngOnInit() :void {
    this.orderTrans
  }

  getOListOrderMove(orderId: string): Observable<Order[]> {
    const url = `${environment.baseUrl}/api/v1/manager/moving/${orderId}`;
    return this.http.get<Order[]>(url);
  }

  getOListOrderComing(orderId: string): Observable<Order[]> {
    const url = `${environment.baseUrl}/api/v1/manager/coming/${orderId}`;
    return this.http.get<Order[]>(url);
  }

  getOListOrderHere(orderId: string): Observable<Order[]> {
    const url = `${environment.baseUrl}/api/v1/manager/here/${orderId}`;
    return this.http.get<Order[]>(url);
  }
  
  getOrdersTest(): Observable<Order[]> {
    console.log('dang test get order')
    return this.http.get<Order[]>(`${environment.baseUrl}/order`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }



  getListOrderStatusWithId(orderId: string): Observable<OrderWithId[]> {
    const url = `http://localhost:8080/api/v1/orderStatus/list/${orderId}`;
    console.log(orderId)
    console.log(url)
    return this.http.get<OrderWithId[]>(url);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return new Observable<any>(); // Hoặc bạn có thể xử lý lỗi theo cách khác nếu cần
  }

  orderTrans(orderId: string, position: string): Observable<OrderReqUpdate> {
    const params = new HttpParams()
      .set('orderId', orderId)
      .set('serviceAddressId', position);

    return this.http.put<OrderReqUpdate>(`${environment.baseUrl}/api/v1/orderStatus/update`, {}, { params }).pipe(
      catchError(this.handleError)
    );
  }

  postNewOrder(newOrder: OrderReq): Observable<OrderReq> {
    return this.http.post<OrderReq>(`${environment.baseUrl}/order`, newOrder, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

}

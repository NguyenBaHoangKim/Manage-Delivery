import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User, Login, Register } from '../model/user';
import { environment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private URL : string = `${environment.baseUrl}`

  userList: User[];

  constructor(private http : HttpClient){
    this.userList = []
  }

  ngOnInit() :void {
    this.getListUser()
  }

  getListUser(): Observable<User[]> {
    return this.http.get<User[]>(this.URL)
  }

login(username: string, password: string): Observable<Login> {
    const body: Login = {
      email: username,
      password: password,
    };

    return this.http.post<Login>(`${this.URL}`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return new Observable<any>();
  }

  register(register: Register, serviceAddressid: string): Observable<Register> {
    if (!register.codeid) {
      console.error('Invalid codeid:', register.codeid);
      return new Observable<Register>(); // Hoặc xử lý lỗi theo cách bạn muốn
    }

    const params = new HttpParams()
      .set('codeid', register.codeid)
      .set('username', register.username)
      .set('email', register.email)
      .set('password', register.password)
      .set('rePassword', register.rePassword)
      .set('phone_number', register.phone_number);

    // Kiểm tra URL trước khi gửi yêu cầu
    const url = `${environment.baseUrl}/api/v1/user/register/employee/${serviceAddressid}`;
    console.log('Request URL:', url);

    return this.http.post<Register>(url, {}, { params }).pipe(
      catchError(this.handleError)
    );
  }

  // register(register: Register, serviceAddressid: string): Observable<Register> {
  //   const params = new HttpParams()
  //     .set('codeid', register.codeid)
  //     .set('username', register.username)
  //     .set('email', register.email)
  //     .set('password', register.password)
  //     .set('rePassword', register.rePassword)
  //     .set('phone_number', register.phone_number);

  //   return this.http.post<Register>(`${environment.baseUrl}/api/v1/user/register/employee/${serviceAddressid}`, {}, { params }).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  
}
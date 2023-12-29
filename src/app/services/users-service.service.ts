import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User, Login, Register, LoginResp } from '../model/user';
import { environment } from '../../enviroment/enviroment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private URL : string = `${environment.baseUrl}`

  userList: User[];

  constructor(private http : HttpClient, private auth:AuthService){
    this.userList = []
  }

  ngOnInit() :void {
    // this.getListUser()
  }


  login(loginData: Login): Observable<LoginResp> {
    const body: Login = {
      email: loginData.email,
      password: loginData.password,
    };
    console.log(body)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<LoginResp>(`${environment.baseUrl}/api/v1/user/login`, body, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return new Observable<any>();
  }

  register(register: Register, serviceAddressid: string): Observable<Register> {
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
  getListUser(): Observable<User[]> {
    const url = `${environment.baseUrl}/api/v1/user/employee/KH02/${this.auth.getServiceAddressId()}`;
    return this.http.get<User[]>(url);
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
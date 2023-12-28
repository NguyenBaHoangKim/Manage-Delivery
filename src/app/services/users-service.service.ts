import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, login } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private URL : string = 'https://jsonplaceholder.typicode.com/users'

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

login(username: string, password: string): Observable<login> {
    const body: login = {
      email: username,
      password: password,
    };

    return this.http.post<login>(`${this.URL}`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  
}
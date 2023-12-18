import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

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
}

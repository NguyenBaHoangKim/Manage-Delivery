import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersServiceService } from '../../services/users-service.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrl: './searching.component.scss'
})
export class SearchingComponent implements OnInit{

  userList: User[] = [];

  constructor(private userService: UsersServiceService){}

  ngOnInit() {
    this.userService.getListUser().subscribe(
      data => {
        this.userList = data;
      },
      error => {
        console.error('Error fetching user list:', error);
      }
    );
  }
}

  
  // constructor(private http : HttpClient){
  //   this.userList = []
  // }
  // ngOnInit() :void {
  //   this.getUserList()
  // }

  // getUserList() {
  //   this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
  //     (result: User[]) => {
  //       this.userList = result;
  //     },
  //     error => {
  //       console.error('Error fetching user list:', error);
  //     }
  //   );
  // }

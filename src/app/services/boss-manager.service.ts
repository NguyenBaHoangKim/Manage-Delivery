import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location, EmployeeInfo } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class BossManagerService {

  private URL : string = 'https://jsonplaceholder.typicode.com/users'

  locationList: Location[] = [];
  employeeList: EmployeeInfo[] = []

  constructor(private http : HttpClient){
    this.locationList = []
  }
  ngOnInit() :void {
    this.getListUser()
    this.getListEmployee()
  }

  getListUser(): Observable<Location[]> {
    return this.http.get<Location[]>(this.URL)
  }
  
  getListEmployee(): Observable<EmployeeInfo[]> {
    return this.http.get<EmployeeInfo[]>(this.URL)
  }
}

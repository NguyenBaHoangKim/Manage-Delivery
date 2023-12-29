import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeInfo } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class HeadPointManageAccountService {
  employeeList: EmployeeInfo[]

  constructor(private http : HttpClient){
    this.employeeList = []
  }
  ngOnInit() :void {
    this.getListEmployee()
  }

  getListEmployee(): Observable<EmployeeInfo[]> {
    return this.http.get<EmployeeInfo[]>('this.URL')
  }
}




import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarServiceUser {

  constructor() { }

  getSidebarMenuUser1() {
    let menuUser: SidebarMenuItemUser[] = [
      {
        id: 1,
        title: 'Dashboard',
        iconStr: 'dashboard',
        path:"/dashboard",
      },
      {
        id: 2,
        title: 'Tìm kiếm đơn hàng',
        iconStr: 'search',
        path:"/search"
      },
    ]
    return of(menuUser)
  }
}

export interface SidebarMenuItemUser {
  id: number,
  title: string,
  iconStr: string,
  path: string
}

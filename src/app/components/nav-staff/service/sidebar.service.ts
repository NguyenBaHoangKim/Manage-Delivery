import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getSidebarMenu() {
    let menu: SidebarMenuItem[] = [
      {
        id: 1,
        title: 'Dashboard',
        iconStr: 'dashboard',
        path:"",
      },
      {
        id: 2,
        title: 'Xác nhận đơn hàng đi',
        iconStr: 'dashboard',
        path:"/point-staff-except-out"
      },
      {
        id: 3,
        title: 'Xác nhận đơn hàng đến',
        iconStr: 'dashboard',
        path:"/point-staff-except"
      },
      {
        id: 4,
        title: 'Tạo đơn chuyển hàng đến điểm giao dịch',
        iconStr: 'dashboard',
        path:"/point-staff-creat"
      },
      {
        id: 5,
        title: 'Tạo đơn chuyển hàng đến điểm tập kết',
        iconStr: 'dashboard',
        path:"/point-staff-creat-topoint"
      },
      {
        id: 6,
        title: 'Tìm kiếm đơn hàng',
        iconStr: 'dashboard',
        path:"/search"
      },
      {
        id: 7,
        title: 'Quản lý tài khoản',
        iconStr: 'dashboard',
        path:"/head-service-manage-account"
      },
      {
        id: 8,
        title: 'Quản lý hàng hóa',
        iconStr: 'dashboard',
        path:"/head-service-manage-goods"
      },
      {
        id: 9,
        title: 'Tạo đơn hàng',
        iconStr: 'dashboard',
        path:"/creat-order"
      },
      {
        id: 10,
        title: 'Quản lý hàng hóa',
        iconStr: 'dashboard',
        path:"/head-point-manage-goods"
      },
      {
        id: 11,
        title: 'Quản lý tài khoản',
        iconStr: 'dashboard',
        path:"/head-point-manage-account"
      },
    ]
    return of(menu)
  }
}

export interface SidebarMenuItem {
  id: number,
  title: string,
  iconStr: string,
  path: string
}

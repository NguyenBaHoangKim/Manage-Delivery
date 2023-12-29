import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {AuthService} from "../../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  getSidebarMenu(codeId : string) {
    if(codeId == "all") { //all
      let menu: SidebarMenuItem[] = [
        {
          id: 1,
          title: 'Dashboard',
          iconStr: 'dashboard',
          path:"/dashboard",
        },
        {
          id: 2,
          title: 'Xác nhận đơn hàng đi',
          iconStr: 'done',
          path:"/point-staff-except-out"
        },
        {
          id: 3,
          title: 'Xác nhận đơn hàng đến',
          iconStr: 'done',
          path:"/point-staff-except"
        },
        {
          id: 4,
          title: 'Chuyển hàng đến điểm giao dịch',
          iconStr: 'swap_vert',
          path:"/point-staff-creat"
        },
        {
          id: 5,
          title: 'Chuyển hàng đến điểm tập kết',
          iconStr: 'move_group',
          path:"/point-staff-creat-topoint"
        },
        {
          id: 6,
          title: 'Tìm kiếm đơn hàng',
          iconStr: 'search',
          path:"/search"
        },
        {
          id: 7,
          title: 'Quản lý tài khoản',
          iconStr: 'manage_accounts',
          path:"/head-service-manage-account"
        },
        {
          id: 8,
          title: 'Quản lý hàng hóa',
          iconStr: 'manage_search',
          path:"/head-service-manage-goods"
        },
        {
          id: 9,
          title: 'Tạo đơn hàng',
          iconStr: 'edit_square',
          path:"/creat-order"
        },
        {
          id: 10,
          title: 'Quản lý hàng hóa',
          iconStr: 'manage_search',
          path:"/head-point-manage-goods"
        },
        {
          id: 11,
          title: 'Quản lý tài khoản',
          iconStr: 'manage_accounts',
          path:"/head-point-manage-account"
        },
        {
          id: 12,
          title: 'Quản lý tổng kho',
          iconStr: 'settings_accessibility',
          path:"/boss-manager"
        },
      ]
      return of(menu)
    }
    else if(codeId[0] == 'N' && codeId[1] == 'V'){ // nhan vien buu cuc
      let menu: SidebarMenuItem[] = [
        {
          id: 1,
          title: 'Dashboard',
          iconStr: 'dashboard',
          path:"/dashboard",
        },
        {
          id: 2,
          title: 'Xác nhận đơn hàng đi',
          iconStr: 'done',
          path:"/point-staff-except-out"
        },
        {
          id: 3,
          title: 'Xác nhận đơn hàng đến',
          iconStr: 'done',
          path:"/point-staff-except"
        },
        {
          id: 4,
          title: 'Chuyển hàng đến điểm giao dịch',
          iconStr: 'swap_vert',
          path:"/point-staff-creat"
        },
        {
          id: 5,
          title: 'Chuyển hàng đến điểm tập kết',
          iconStr: 'move_group',
          path:"/point-staff-creat-topoint"
        },
        {
          id: 6,
          title: 'Tạo đơn hàng',
          iconStr: 'edit_square',
          path:"/creat-order"
        },
        {
          id: 7,
          title: 'Giao hàng',
          iconStr: 'edit_square',
          path:"/exccept"
        },
      ]
      return of(menu)
    }
    else if(codeId[0] == 'Q' && codeId[1] == 'L') { //quan li buu cuc
      let menu: SidebarMenuItem[] = [
        {
          id: 1,
          title: 'Dashboard',
          iconStr: 'dashboard',
          path:"/dashboard",
        },
        {
          id: 2,
          title: 'Quản lý tài khoản',
          iconStr: 'manage_accounts',
          path:"/head-service-manage-account"
        },
        {
          id: 3,
          title: 'Quản lý hàng hóa',
          iconStr: 'manage_search',
          path:"/head-service-manage-goods"
        },
      ]
      return of(menu)
    }
    else if(codeId[0] == "N" && codeId[1] == "V" && codeId[2] == 'K' ) { //NV kho
      let menu: SidebarMenuItem[] = [
        {
          id: 1,
          title: 'Dashboard',
          iconStr: 'dashboard',
          path:"/dashboard",
        },
        {
          id: 2,
          title: 'Xác nhận đơn hàng đi',
          iconStr: 'done',
          path:"/point-staff-except-out"
        },
        {
          id: 3,
          title: 'Xác nhận đơn hàng đến',
          iconStr: 'done',
          path:"/point-staff-except"
        },
        {
          id: 4,
          title: 'Chuyển hàng đến điểm giao dịch',
          iconStr: 'swap_vert',
          path:"/point-staff-creat"
        },
        {
          id: 5,
          title: 'Chuyển hàng đến điểm tập kết',
          iconStr: 'move_group',
          path:"/point-staff-creat-topoint"
        },
      ]
      return of(menu)
    }
    else if(codeId[0] == 'Q' && codeId[1] == 'L' && codeId[2] == 'K') { //quan li kho
      let menu: SidebarMenuItem[] = [
        {
          id: 1,
          title: 'Dashboard',
          iconStr: 'dashboard',
          path:"/dashboard",
        },
        {
          id: 2,
          title: 'Quản lý hàng hóa',
          iconStr: 'manage_search',
          path:"/head-point-manage-goods"
        },
        {
          id: 3,
          title: 'Quản lý tài khoản',
          iconStr: 'manage_accounts',
          path:"/head-point-manage-account"
        },
      ]
      return of(menu)
    }
    else if(codeId == "BOSS"){ //boss
      let menu: SidebarMenuItem[] = [
        {
          id: 1,
          title: 'Dashboard',
          iconStr: 'dashboard',
          path:"/dashboard",
        },
        {
          id: 2,
          title: 'Quản lý tài khoản',
          iconStr: 'manage_accounts',
          path:"/head-point-manage-account"
        },
        {
          id: 3,
          title: 'Quản lý tổng kho',
          iconStr: 'settings_accessibility',
          path:"/boss-manager"
        },
      ]
      return of(menu)
    }
    else { //nguoi dung
      let menu: SidebarMenuItem[] = [
        {
          id: 1,
          title: 'Dashboard',
          iconStr: 'dashboard',
          path:"/dashboard",
        },
        {
          id: 6,
          title: 'Tìm kiếm đơn hàng',
          iconStr: 'search',
          path:"/search"
        },
      ]
      return of(menu)
    }
  }
}


export interface SidebarMenuItem {
  id: number,
  title: string,
  iconStr: string,
  path: string
}

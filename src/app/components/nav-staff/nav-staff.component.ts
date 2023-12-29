import { Component } from '@angular/core';
import { SidebarMenuItem, SidebarService } from './service/sidebar.service';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";
import {SidebarMenuItemUser, SidebarServiceUser} from "./service/sidebar.serviceUser";

@Component({
  selector: 'app-nav-staff',
  templateUrl: './nav-staff.component.html',
  styleUrl: './nav-staff.component.scss',
  animations: [
    trigger('openCloseNav', [
      state('true', style({
        width: '300px',
      })),
      state('false', style({
        width: '60px',
      })),
      transition('false => true', [animate('400ms ease-in-out')]),
      transition('true => false', [animate('400ms ease-out')]),
    ]),
    trigger('openCloseNavContent', [
      state('true', style({
        opacity: 1,
      })),
      state('false', style({
        opacity: 0,
      })),
    ]),
  ]
})
export class NavStaffComponent {
  codeId: number = 1
  menus: SidebarMenuItem[] = []
  role: String = ''
  private userRoles: string[] = ['boss', 'pointManager', 'serviceManager', 'serviceStaff', 'pointStaff'];
  selectedMenuItem: SidebarMenuItem | null = null
  showNav = false

  constructor(private sidebarService: SidebarService,
              private router: Router){
    this.sidebarService.getSidebarMenu(7).subscribe(
      data => this.menus = data
    )
  }

  onClickItem(item: SidebarMenuItem) {
    this.selectedMenuItem = item
    this.router.navigate([item.path])
  }

  // roleCheck(role: String) {
  //   if (role == 'boss') {
  //     return 1
  //   }
  //   else if (role == 'pointManager'){
  //     return 2
  //   }
  //   else if (role == 'serviceManager'){
  //     return 3
  //   }
  //   else if (role == 'serviceStaff'){
  //     return 4
  //   }
  //   else if (role == 'pointStaff'){
  //     return 5
  //   }
  //   else {
  //     return 6
  //   }
  // }

  checkRole(roleToCheck: string): boolean {
    return this.userRoles.includes(roleToCheck);
  }

  optionIdentity(index: number, value: SidebarMenuItem) {
    return value.id
  }
}

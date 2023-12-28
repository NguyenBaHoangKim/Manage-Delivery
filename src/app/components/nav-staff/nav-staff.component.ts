import { Component } from '@angular/core';
import { SidebarMenuItem, SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-nav-staff',
  templateUrl: './nav-staff.component.html',
  styleUrl: './nav-staff.component.scss'
})
export class NavStaffComponent {
  menus: SidebarMenuItem[] = []
  role: String = ''
  private userRoles: string[] = ['boss', 'pointManager', 'serviceManager', 'serviceStaff', 'pointStaff'];
  selectedMenuItem: SidebarMenuItem | null = null

  constructor(private sidebarService: SidebarService){
    this.sidebarService.getSidebarMenu().subscribe(
      data => this.menus = data
    )
  }

  onClickItem(item: SidebarMenuItem) {
    this.selectedMenuItem = item
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
}

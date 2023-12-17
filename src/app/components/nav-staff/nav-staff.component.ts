import { Component } from '@angular/core';
import { SidebarMenuItem, SidebarService } from './service/sidebar.service';

@Component({
  selector: 'app-nav-staff',
  templateUrl: './nav-staff.component.html',
  styleUrl: './nav-staff.component.scss'
})
export class NavStaffComponent {
  menus: SidebarMenuItem[] = []
  selectedMenuItem: SidebarMenuItem | null = null

  constructor(private sidebarService: SidebarService){
    this.sidebarService.getSidebarMenu().subscribe(
      data => this.menus = data
    )
  }

  onClickItem(item: SidebarMenuItem) {
    this.selectedMenuItem = item
  }
}

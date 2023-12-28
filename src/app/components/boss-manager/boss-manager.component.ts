import { Component } from '@angular/core';

@Component({
  selector: 'app-boss-manager',
  templateUrl: './boss-manager.component.html',
  styleUrl: './boss-manager.component.scss'
})
export class BossManagerComponent {
  locations: Location[] = [
    {
      name: 'Địa điểm 1',
      location: 'Hà Nội, Việt Nam',
      count: 10,
    },
    {
      name: 'Địa điểm 2',
      location: 'Đà Nẵng, Việt Nam',
      count: 5,
    },
    {
      name: 'Địa điểm 3',
      location: 'Hồ Chí Minh, Việt Nam',
      count: 8,
    }
  ];
// employees:  EmployeeInfo[] = [];
employee: EmployeeInfo = 
  {
    quanLy: "Nguyễn Văn A",
    maNhanVien: "NV001",
    email: "nva@example.com",
    lienHe: "0123456789",
    soNhanVien: 8,
  }

}


export interface Location {
  name: string;
  location: string;
  count: number;
}

export interface EmployeeInfo {
  quanLy: string;
  maNhanVien: string;
  email: string;
  lienHe: string;
  soNhanVien: number;
}
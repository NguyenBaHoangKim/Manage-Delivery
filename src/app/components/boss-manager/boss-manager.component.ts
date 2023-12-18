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
      imageUrl: 'your-image-url-1.jpg'
    },
    {
      name: 'Địa điểm 2',
      location: 'Đà Nẵng, Việt Nam',
      count: 5,
      imageUrl: 'your-image-url-2.jpg'
    },
    {
      name: 'Địa điểm 3',
      location: 'Hồ Chí Minh, Việt Nam',
      count: 8,
      imageUrl: 'your-image-url-3.jpg'
    },
    {
      name: 'Địa điểm 3',
      location: 'Hồ Chí Minh, Việt Nam',
      count: 8,
      imageUrl: 'your-image-url-3.jpg'
    },
    {
      name: 'Địa điểm 3',
      location: 'Hồ Chí Minh, Việt Nam',
      count: 8,
      imageUrl: 'your-image-url-3.jpg'
    },
    {
      name: 'Địa điểm 3',
      location: 'Hồ Chí Minh, Việt Nam',
      count: 8,
      imageUrl: 'your-image-url-3.jpg'
    },
    {
      name: 'Địa điểm 3',
      location: 'Hồ Chí Minh, Việt Nam',
      count: 8,
      imageUrl: 'your-image-url-3.jpg'
    },
    // Thêm các địa điểm khác vào đây
  ];
}
export interface Location {
  name: string;
  location: string;
  count: number;
  imageUrl: string;
}
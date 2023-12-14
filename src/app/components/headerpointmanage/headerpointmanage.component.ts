import { Component } from '@angular/core';

@Component({
  selector: 'app-headerpointmanage',
  templateUrl: './headerpointmanage.component.html',
  styleUrl: './headerpointmanage.component.scss'
})
export class HeaderpointmanageComponent {
  searchCode: string = 'acs'; // Đảm bảo khai báo searchCode với kiểu dữ liệu phù hợp (ở đây là string)

  // Các phương thức và logic khác của component
  searchOrder() {
    // Logic xử lý khi thực hiện tìm kiếm đơn hàng
    console.log('Search order function');
  }
}

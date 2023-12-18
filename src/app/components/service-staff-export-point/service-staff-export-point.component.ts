import { Component } from '@angular/core';

@Component({
  selector: 'app-service-staff-export-point',
  templateUrl: './service-staff-export-point.component.html',
  styleUrl: './service-staff-export-point.component.scss'
})
export class ServiceStaffExportPointComponent {
  accept = { id: 'VD001', type: 'giấy tờ', status: 'đang đến' }; // Thông tin vận đơn

}

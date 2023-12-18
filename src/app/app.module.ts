import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchingComponent } from './components/searching/searching.component';
import { HeaderpointmanageComponent } from './components/headerpointmanage/headerpointmanage.component';
import { FormsModule } from '@angular/forms';
import { HeaderpointaccountComponent } from './components/headerpointaccount/headerpointaccount.component';
import { PopupComponent } from './components/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OdercreationComponent } from './components/odercreation/odercreation.component';
import { OderacceptComponent } from './components/oderaccept/oderaccept.component';
import { PointStaffCreatComponent } from './components/point-staff-creat/point-staff-creat.component';
import { PointStaffExceptComponent } from './components/point-staff-except/point-staff-except.component';
import { NavStaffComponent } from './components/nav-staff/nav-staff.component';
import { PointStaffExceptOutComponent } from './components/point-staff-except-out/point-staff-except-out.component';
import { PointStaffCreatTopointComponent } from './components/point-staff-creat-topoint/point-staff-creat-topoint.component';
import { HeadServiceManageAccountComponent } from './components/head-service-manage-account/head-service-manage-account.component';
import { HeadServiceManageGoodsComponent } from './components/head-service-manage-goods/head-service-manage-goods.component';
import { ServiceStaffExportCustomerComponent } from './components/service-staff-export-customer/service-staff-export-customer.component';
import { ServiceStaffExportPointComponent } from './components/service-staff-export-point/service-staff-export-point.component';
import { ServiceStaffPopupComponent } from './components/service-staff-popup/service-staff-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    PageNotFoundComponent,
    SearchingComponent,
    HeaderpointmanageComponent,
    HeaderpointaccountComponent,
    PopupComponent,
    OdercreationComponent,
    OderacceptComponent,
    NavStaffComponent,
    PointStaffCreatComponent,
    PointStaffExceptComponent,
    PointStaffExceptOutComponent,
    PointStaffCreatTopointComponent,
    HeadServiceManageAccountComponent,
    HeadServiceManageGoodsComponent,
    ServiceStaffExportCustomerComponent,
    ServiceStaffExportPointComponent,
    ServiceStaffPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

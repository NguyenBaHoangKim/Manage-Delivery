import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchingComponent } from './components/searching/searching.component';
import { PointStaffCreatComponent } from './components/point-staff-creat/point-staff-creat.component';
import { PointStaffExceptComponent } from './components/point-staff-except/point-staff-except.component';
import { PointStaffExceptOutComponent } from './components/point-staff-except-out/point-staff-except-out.component';
import { PointStaffCreatTopointComponent } from './components/point-staff-creat-topoint/point-staff-creat-topoint.component';
import { HeadServiceManageAccountComponent } from './components/head-service-manage-account/head-service-manage-account.component';
import { HeadServiceManageGoodsComponent } from './components/head-service-manage-goods/head-service-manage-goods.component';

const routes: Routes = [
  { path: '', component: HeadServiceManageGoodsComponent },
  { path: 'search', component: SearchingComponent},
  { path: 'point-staff-except-out', component: PointStaffExceptOutComponent },
  { path: 'point-staff-except', component: PointStaffExceptComponent},
  { path: 'point-staff-creat', component: PointStaffCreatComponent },
  { path: 'point-staff-creat-topoint', component: PointStaffCreatTopointComponent },
  { path: 'head-service-manage-account', component: HeadServiceManageAccountComponent },
  { path: 'head-service-manage-goods', component: HeadServiceManageGoodsComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

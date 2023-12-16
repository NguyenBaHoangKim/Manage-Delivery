import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchingComponent } from './components/searching/searching.component';
import { HeaderpointmanageComponent } from './components/headerpointmanage/headerpointmanage.component';
import { HeaderpointaccountComponent } from './components/headerpointaccount/headerpointaccount.component';
import { OdercreationComponent } from './components/odercreation/odercreation.component';

const routes: Routes = [
  { path: '', component: SearchingComponent },
  { path: 'headerpoint-manage', component: HeaderpointmanageComponent },
  { path: 'headerpoint-accounts', component: HeaderpointaccountComponent },
  { path: 'odercreation', component: OdercreationComponent },
  { path: 'search', component: SearchingComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

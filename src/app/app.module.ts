import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RfcComponent } from './rfc/rfc.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { EmployeeComponent } from './employee/employee.component';
import { FirmComponent } from './firm/firm.component';


const routes : Routes = [
  {path: 'first', component:FirstComponent},
  {path: 'second', component: SecondComponent}
];

export const routingComponents = [FirstComponent, SecondComponent, PageNotFoundComponent];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RfcComponent,
    Test1Component,
    Test2Component,
    EmployeeComponent,
    FirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    /*RouterModule.forRoot([
      {path: 'first', component:FirstComponent},
      {path: 'second', component: SecondComponent}
    ])*/
   // RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

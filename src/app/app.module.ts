import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RfcComponent } from './rfc/rfc.component';


const routes : Routes = [
  {path: 'first', component:FirstComponent},
  {path: 'second', component: SecondComponent}
];

export const routingComponents = [FirstComponent, SecondComponent, PageNotFoundComponent];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RfcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
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

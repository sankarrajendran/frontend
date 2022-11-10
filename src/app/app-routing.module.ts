import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';

const routes : Routes = [
  {path: 'first', component:FirstComponent},
  {path: 'second', component: SecondComponent}
];

export const routingComponents = [FirstComponent, SecondComponent, PageNotFoundComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

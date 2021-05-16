import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { SalepageComponent } from './salepage/salepage.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sale', component: SalepageComponent},
  // {path: '', redirectTo: './home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

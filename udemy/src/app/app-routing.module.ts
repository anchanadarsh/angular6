import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from'./dashboard/dashboard.component';
import {ProductListComponent} from'./product-list/product-list.component';


const routes:Routes = [
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'products',component:ProductListComponent}
]

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

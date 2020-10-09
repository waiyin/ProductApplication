import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {ProductListComponent} from "./productList.component";
import {EditComponent} from "./edit.component";
import {DetailComponent} from "./detail.component";

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'products', component: ProductListComponent },
  { path:'product', component: EditComponent },
  { path:'product/:id', component: DetailComponent },
  { path:'product/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

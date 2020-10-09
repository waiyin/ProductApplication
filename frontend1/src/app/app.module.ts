import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './productList.component';
import { HomeComponent } from "./home.component";
import { NavComponent } from './nav.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';

const routes = [
  { path:'', component: HomeComponent },
  { path:'products', component: ProductListComponent },
  { path:'product', component: ProductComponent },
  { path:'product/:id', component: ProductComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

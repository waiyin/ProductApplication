import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent {
  product = {}
  constructor(private api: ApiService){}
}

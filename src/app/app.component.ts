import { ModalService } from './services/modal.service';
import { Observable, tap } from 'rxjs';
import { ProductService } from './services/product.service';
import { IProduct } from './models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

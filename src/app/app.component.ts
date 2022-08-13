import { Observable, tap } from 'rxjs';
import { ProductService } from './services/product.service';
import { IProduct } from './models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular app';
  // products: IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>;

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }
}

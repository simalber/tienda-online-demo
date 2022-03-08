import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ProductsService } from './services/products.service';
import { product } from './interfaces/product.interface';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: product[];



  constructor( private productSvc: ProductsService,
               private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.productSvc.getProducts().
    pipe(
      tap( (products: product[]) => this.products = products))
    .subscribe();
  }

  addToCart( product: product): void{
    console.log('AddTocart', product);
    this.shoppingCartSvc.updateCart(product)
  }
  };

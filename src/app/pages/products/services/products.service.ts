import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = 'http://localhost:3000/products';
  constructor( private http: HttpClient) { }

  getProducts () : Observable<product[]>{
    return this.http.get<product[]>(this.apiURL);
  }


  updateStock(productId: number, stock: number): Observable<any> {
    const body = { "stock": stock };
    return this.http.patch<any>(`${this.apiURL}/${productId}`, body);
  }
}

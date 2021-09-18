import { Injectable } from '@angular/core';
import { Product } from '../data/products';
import { FormProduct } from '../components/add-product/add-product.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/products';

  addProduct(product: Product) {
    return this.http.post<Product>(this.apiUrl, product, httpOptions);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;

    return this.http.delete<Product>(url);
  }

  constructor(private http: HttpClient) {}
}

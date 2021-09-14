import { Injectable } from '@angular/core';
import { Product, products } from '../data/products';
import { FormProduct } from '../components/add-product/add-product.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  items: Product[] = products;

  addProduct(product: FormProduct) {
    this.items.push({ id: this.items.length, ...product });
  }

  getItems() {
    return this.items;
  }

  deleteProduct(id: number) {
    this.items = this.items.filter((el) => el.id !== id);
  }

  constructor() {}
}

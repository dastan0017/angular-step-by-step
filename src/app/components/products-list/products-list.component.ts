import { Component, OnInit } from '@angular/core';
import { Product } from '../../data/products';
import { ProductService } from '../../services/product.service';
import { FormProduct } from '../add-product/add-product.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productList!: Product[];
  selectedCards = 0;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

  toggleCard(isActive: boolean) {
    isActive ? this.selectedCards++ : this.selectedCards--;
  }

  deleteProject(product: Product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.productList = this.productList.filter((el) => product.id !== el.id);
    });
  }

  onAddProduct(newProduct: Product) {
    console.log('submit');
    this.productService
      .addProduct(newProduct)
      .subscribe((product) => this.productList.push(product));
  }
}

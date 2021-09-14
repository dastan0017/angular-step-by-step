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
  productList: Product[] = this.productService.getItems();
  selectedCards = 0;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {}

  toggleCard(isActive: boolean) {
    isActive ? this.selectedCards++ : this.selectedCards--;
  }

  deleteProject(id: number) {
    this.productService.deleteProduct(id);
    this.productList = this.productService.getItems();
  }

  onAddProduct(newProduct: FormProduct) {
    console.log('submit')
    this.productService.addProduct(newProduct);
  }
}

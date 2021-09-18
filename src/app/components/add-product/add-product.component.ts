import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/data/products';
import * as uuid from 'uuid';
export interface FormProduct {
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Output() onAddNewProduct = new EventEmitter<Product>();
  name!: string;
  description!: string;
  price!: number;

  isFormOpen!: boolean;

  onSubmit() {
    if (!this.name || !this.description) {
      alert('Please insert pruduct info');
      return;
    }

    const newProduct = {
      id: uuid.v1(),
      name: this.name,
      description: this.description,
      price: this.price,
    };

    console.log(newProduct)
    this.onAddNewProduct.emit(newProduct);
    this.clearInputs();
  }

  clearInputs() {
    this.name = '';
    this.description = '';
    this.price = 0;
  }

  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}

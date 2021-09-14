import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() onAddNewProduct = new EventEmitter<FormProduct>();
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
      name: this.name,
      description: this.description,
      price: this.price,
    };
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

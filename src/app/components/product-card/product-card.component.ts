import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../data/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() onToggle = new EventEmitter<boolean>();
  @Output() onDelete = new EventEmitter<number>();
  isActive = false;

  constructor() {}

  ngOnInit(): void {}

  selectProduct() {
    this.isActive = !this.isActive;
    this.onToggle.emit(this.isActive);
  }

  deleteProject(id: number) {
    this.onDelete.emit(id);
  }
}

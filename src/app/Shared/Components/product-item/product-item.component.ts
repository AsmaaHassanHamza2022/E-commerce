import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/Interfaces';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() product?:IProduct={} as IProduct;
  @Output() AddToCart=new EventEmitter<IProduct>();
  

  public addCart(){
    this.AddToCart.emit(this.product);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/Interfaces';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  constructor(private messageService:MessageService){

  }

  @Input() product?:IProduct={} as IProduct;
  @Output() AddToCart=new EventEmitter<IProduct>();
  

  public addCart(){
    this.messageService.add({ severity: 'success', summary: 'Added Successfully', detail:'Product Added To Cart',life:3000})

    this.AddToCart.emit(this.product);
  }
}

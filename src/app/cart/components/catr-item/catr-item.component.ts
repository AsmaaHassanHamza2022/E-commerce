import { Component, Input } from '@angular/core';
import { IcartItem } from '../../models/cart';
import { CartService } from '../../Services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-catr-item',
  templateUrl: './catr-item.component.html',
  styleUrls: ['./catr-item.component.scss']
})
export class CatrItemComponent {

  constructor(private cartservice:CartService ,private messageService:MessageService){

  }

  @Input() cartItem:IcartItem={} as IcartItem;

  catchNewCount(newQuantity:number,productId:number){
    this.cartservice.changeProductQuantity(newQuantity,productId);
  }

  removeItem(productId:number){
    this.messageService.add({ severity: 'success', summary: 'Removed Successfully', detail:'Product Removed From Cart',life:5000  })

    this.cartservice.removeProductFromCart(productId);

  }

}

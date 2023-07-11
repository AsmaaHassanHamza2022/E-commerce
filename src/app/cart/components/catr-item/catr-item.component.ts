import { Component, Input } from '@angular/core';
import { ICartItem } from '../../models/cart';

@Component({
  selector: 'app-catr-item',
  templateUrl: './catr-item.component.html',
  styleUrls: ['./catr-item.component.scss']
})
export class CatrItemComponent {

  @Input() cartItem:ICartItem={} as ICartItem;

  catchNewCount(productCount:number){
    console.log(productCount)
  }

}

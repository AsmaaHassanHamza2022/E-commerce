import { Component, OnInit,} from '@angular/core';
import { CartService } from 'src/app/cart/Services/cart.service';
import { IcartItem } from 'src/app/cart/models/cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public toggleNavbar:boolean=false;
  constructor(public cartService:CartService) {}
  ngOnInit(): void {}

  getCartItemsCount(items:IcartItem[]){
    return items.reduce((e1,e2)=>{
      return e1+e2.quantity
    },0)
  }
  
  ToggleNavBar() {
    this.toggleNavbar =!this.toggleNavbar;
  }
}

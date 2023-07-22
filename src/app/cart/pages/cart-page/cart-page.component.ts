import { AfterViewInit, Component,OnInit, } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit ,AfterViewInit{
  constructor(public cartService:CartService) {}
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
    const cartId=localStorage.getItem("Cart_Id");
    if(cartId){
       this.getCartItems(cartId);
    }

  }
 
  getCartItems(cartId:string){
    this.cartService.getCartProducts(cartId).subscribe();
  }

	

}

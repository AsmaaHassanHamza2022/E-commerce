import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Cart, ICart, IcartItem} from '../models/cart';
import { ApiCallerService } from 'src/app/core/Services/api-caller.service';
import { APIs } from 'src/app/core/API/apis';
import { IProduct } from 'src/app/Shared/models/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: BehaviorSubject<Cart | null> =
    new BehaviorSubject<Cart| null>(null);
  public cart$ = this.cart.asObservable();

  constructor(private apicallerService: ApiCallerService) {}

  public getCartProducts(cartId: string): Observable<ICart> {
    return this.apicallerService
      .get<ICart>(APIs.Cart + '?=' + cartId)
      .pipe(tap((data) => this.cart.next(data)));
  }

  // private isCartEmpty(){
  //   return !this.cart.getValue();
  // }

  // private getCurrentCartItems():IcartItem[]{
  //   return (this.cart.getValue() as ICart).items;
  // }

  private createCart(){
    const cart= new Cart()
    localStorage.setItem("Cart_Id" ,cart.id);
    return cart;
  }

  private mapProductToCartItem(product:IProduct ,quantity:number=1){
    return {
      id:product.id,
      productName: product.name,
      price:product.price,
      quantity:quantity,
      pictureUrl: product.pictureUrl,
      brand: product.productBrand,
      type: product.productType

    }
  }

  private updateOrAddCartItems(currentCartItems:IcartItem[],item:IcartItem){
    let existingItem=currentCartItems.find((currentItem)=>currentItem.id ==item.id)
    if(existingItem){
      existingItem.quantity+=item.quantity;
    }else{
      currentCartItems.push(item)
    }
    return currentCartItems;
  }
  private setCart(cart:Cart){
    return this.apicallerService.post<ICart>(APIs.Cart,cart).pipe(tap((data) => this.cart.next(data))).subscribe();

  }

  public addToCart(item:IProduct ,quantity:number=1){
    debugger
    const cartItem=this.mapProductToCartItem(item,quantity);
    let cart=this.cart.getValue() ?? this.createCart();
     cart.items=this.updateOrAddCartItems(cart.items,cartItem);
     this.cart.next(cart);

     console.log(cart)
    //  this.setCart(cart);
  }

  




}

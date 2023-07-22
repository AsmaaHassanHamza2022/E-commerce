import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  Cart,
  CartTotalPrice,
  ICart,
  ICartTotalPrice,
  IcartItem,
} from '../models/cart';
import { ApiCallerService } from 'src/app/core/Services/api-caller.service';
import { APIs } from 'src/app/core/API/apis';
import { IProduct } from 'src/app/Shared/models/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: BehaviorSubject<Cart | null> = new BehaviorSubject<Cart | null>(
    null
  );
  public cart$ = this.cart.asObservable();

  public cartTotalPrice: BehaviorSubject<ICartTotalPrice | null> =
    new BehaviorSubject<ICartTotalPrice | null>(null);
  public cartTotalPrice$ = this.cartTotalPrice.asObservable();

  constructor(private apicallerService: ApiCallerService) {}

  public getCartProducts(cartId: string): Observable<ICart> {
    return this.apicallerService.get<ICart>(APIs.Cart + '?id=' + cartId).pipe(
      tap((data) => {
        this.cart.next(data);
        this.calculateTotalPrice();
      })
    );
  }

  // private isCartEmpty(){
  //   return !this.cart.getValue();
  // }

  // private getCurrentCartItems():IcartItem[]{
  //   return (this.cart.getValue() as ICart).items;
  // }

  private createCart() {
    const cart = new Cart();
    localStorage.setItem('Cart_Id', cart.id);
    return cart;
  }

  private mapProductToCartItem(product: IProduct, quantity: number = 1) {
    return {
      id: product.id,
      productName: product.name,
      price: product.price,
      quantity: quantity,
      pictureUrl: product.pictureUrl,
      brand: product.productBrand,
      type: product.productType,
    };
  }

  private updateOrAddCartItems(currentCartItems: IcartItem[], item: IcartItem) {
    let existingItem = currentCartItems.find(
      (currentItem) => currentItem.id == item.id
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      currentCartItems.push(item);
    }
    return currentCartItems;
  }
  private setCart(cart: Cart | null = null) {
    if (cart) {
      return this.apicallerService
        .post<ICart>(APIs.Cart, cart)
        .pipe(tap((data) =>{
          this.cart.next(data);
          this.calculateTotalPrice();
        }))
        .subscribe();
    } else {
      return;
    }
  }

  public addToCart(item: IProduct, quantity: number = 1) {
    const cartItem = this.mapProductToCartItem(item, quantity);
    let cart = this.cart.getValue() ?? this.createCart();
    cart.items = this.updateOrAddCartItems(cart.items, cartItem);
    this.cart.next(cart);
    this.setCart(cart);
  }

  public calculateTotalPrice() {
    const cart = this.cart.getValue();
    const totalPrice = cart?.items.reduce(
      (a, b) => a + b.price * b.quantity,
      0
    );
    const total = new CartTotalPrice(totalPrice ?? 0);
    this.cartTotalPrice.next(total);
  }

  public changeProductQuantity(quantity: number, productId: number) {
    let changedProduct = this.cart
      .getValue()
      ?.items?.find((product) => product.id == productId);
    if (changedProduct) {
      changedProduct.quantity = quantity;
      this.calculateTotalPrice();

      this.setCart(this.cart.getValue());
    }
  }

  public removeProductFromCart(productId: number) {
    let cartItems=this.cart.getValue();
    if(cartItems)  cartItems.items=cartItems?.items?.filter((product) => product.id != productId);

    if (cartItems?.items.length == 0) {
      this.removeCart();
    }else{
      this.setCart(this.cart.getValue());

    }
  }

  public removeCart() {
    const cartId = localStorage.getItem('Cart_Id');
    if (cartId) {
      this.apicallerService.delete(APIs.Cart + '?id=' + cartId).pipe(
        tap(()=>{
          this.cart.next(null);
          this.cartTotalPrice.next(null);
          localStorage.removeItem("Cart_Id");
        })
      ).subscribe();
    }
  }
}

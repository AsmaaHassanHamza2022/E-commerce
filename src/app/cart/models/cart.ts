import { createId } from '@paralleldrive/cuid2';
import { IProduct } from 'src/app/Shared/models/Interfaces';

export interface ICartItem {
  productName: string;
  productPrice: string;
  productPhoto: string;
}

export interface ICart {
  id: string;
  items: IcartItem[];
  deliveryMethodId?: number;
  clientSecret?: string;
  paymentIntentId?: string;
  shippingPrice?: number;
}

export interface IcartItem {
  id: number;
  productName: string;
  price:number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

export class Cart implements ICart{
  public id: string = createId();
  public items: IcartItem[] = [];
}

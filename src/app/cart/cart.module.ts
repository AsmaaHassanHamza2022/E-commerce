import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { SharedModule } from '../Shared/shared.module';
import { CatrItemComponent } from './components/catr-item/catr-item.component';


@NgModule({
  declarations: [
    CartPageComponent,
    CatrItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }

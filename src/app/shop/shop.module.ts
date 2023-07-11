import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsListComponent } from './Pages/products-list/products-list.component';
import { ProductsService } from './Services/products.service';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers:[ProductsService]
})
export class ShopModule { }

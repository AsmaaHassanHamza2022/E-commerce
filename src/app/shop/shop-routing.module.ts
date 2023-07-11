import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './Pages/products-list/products-list.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';

const routes: Routes = [
  {path:'' ,redirectTo:'products' ,pathMatch:'full'},
  {path:'products' ,component:ProductsListComponent},
  {path:'product/:id' ,component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }

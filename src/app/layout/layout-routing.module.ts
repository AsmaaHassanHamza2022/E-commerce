import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'shop',
        loadChildren: () =>
          import('../shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('../identity/identity.module').then((m) => m.IdentityModule),
      },
      {
        path:'cart',
        loadChildren:()=>import('../cart/cart.module').then((m)=>m.CartModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

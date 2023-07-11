import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class LayoutModule { }

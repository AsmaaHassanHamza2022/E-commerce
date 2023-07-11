import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from './Services/home.service';
import { SharedModule } from '../Shared/shared.module';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    HomePageComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCarouselModule,
    SharedModule,
    ToastModule
  ],
  providers:[HomeService]
})
export class HomeModule { }

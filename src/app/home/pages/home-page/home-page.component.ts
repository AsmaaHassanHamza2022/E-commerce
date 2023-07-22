import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../Services/home.service';
import { IProduct, Pagination } from 'src/app/Shared/models/Interfaces';
import { CartService } from 'src/app/cart/Services/cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public MostPopularProducts:IProduct[]=[]
  constructor(private homeService:HomeService ,private cartService:CartService){}

  ngOnInit(): void {
    this.homeService.getProduct().subscribe((res:Pagination<IProduct>)=>{
      if(res){
        this.MostPopularProducts=res.data;
      }
    })
  }

  public addToCart(product:IProduct){
    this.cartService.addToCart(product);

  }
 


}

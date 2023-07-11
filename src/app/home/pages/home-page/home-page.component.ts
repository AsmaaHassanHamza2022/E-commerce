import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../Services/home.service';
import { ApiCallerService } from 'src/app/core/Services/api-caller.service';
import { IProduct, Pagination } from 'src/app/Shared/models/Interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public MostPopularProducts:IProduct[]=[]
  constructor(private homeService:HomeService){}

  ngOnInit(): void {
    this.homeService.getProduct().subscribe((res:Pagination<IProduct>)=>{
      if(res){
        this.MostPopularProducts=res.data;
      }
    })
  }
 


}

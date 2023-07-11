import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { IProduct } from 'src/app/Shared/models/Interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public productItem: IProduct = {} as IProduct;
  public productId: number = -1;
  private productCount:number=1;
  
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.productId == -1) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
    this.productsService.getProductById(this.productId).subscribe((productData)=>{
      if(productData){
        this.productItem=productData;
      }else{
        this.router.navigate(['/']);
      }
    });
  }

  catchNewCount(productCount:number){
    this.productCount=productCount;
  }

 
}

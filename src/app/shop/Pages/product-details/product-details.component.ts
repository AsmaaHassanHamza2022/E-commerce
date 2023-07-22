import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { IProduct } from 'src/app/Shared/models/Interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/Services/cart.service';

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
    private router: Router,
    private cartService:CartService
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
    this.cartService.changeProductQuantity(productCount,this.productId);
  }

  addToCart(){
    debugger
    this.cartService.addToCart(this.productItem,this.productCount);
  }

 
}

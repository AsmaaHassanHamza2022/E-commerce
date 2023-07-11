import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrls: ['./product-counter.component.scss']
})
export class ProductCounterComponent {
  public productCount:number=1;
  @Output() changeProductCount= new EventEmitter<number>();

  constructor(){

  }
  public onPlusClick(){
    this.productCount ++ ;
    this.changeProductCount.emit(this.productCount)
    }

  public onMinusClick(){
    if(this.productCount !=1){
      this.productCount --;
    }else{
      this.productCount=1;
    }
    this.changeProductCount.emit(this.productCount)


  }

}

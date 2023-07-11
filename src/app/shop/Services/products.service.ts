import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, Lookups, Pagination, ProductFilters } from 'src/app/Shared/models/Interfaces';
import { APIs } from 'src/app/core/API/apis';
import { ApiCallerService } from 'src/app/core/Services/api-caller.service';

@Injectable()
export class ProductsService {

  constructor(private ApiCallerService:ApiCallerService) { }

  public getProductsBrandes():Observable<Lookups[]>{
    return this.ApiCallerService.get(APIs.Product.GetProductsBrands);

  }
  public getProductsTypes():Observable<Lookups[]>{
    return this.ApiCallerService.get(APIs.Product.GetProductsTypes);

  }
  public getAllProducts(filters:ProductFilters):Observable<Pagination<IProduct>>{
    let prams:string=`?`
    if(filters.PageIndex) prams+=`&PageIndex=${filters.PageIndex}`;
    if(filters.BrandId) prams+=`&BrandId=${filters.BrandId}`;
    if(filters.PageSize) prams+=`&PageSize=${filters.PageSize}`;
    if(filters.TypeId) prams+=`&TypeId=${filters.TypeId}`;
    if(filters.Sort) prams+=`&Sort=${filters.Sort}`;
    if(filters.Search) prams+=`&Search=${filters.Search}`;
      prams=prams.replace('?&' ,'?');
      return this.ApiCallerService.get(APIs.Product.GetAllProducts +prams);


  }

  public getProductById(productId:number):Observable<IProduct>{
    return this.ApiCallerService.get(APIs.Product.GetProductById +"/" +productId);
  }
}

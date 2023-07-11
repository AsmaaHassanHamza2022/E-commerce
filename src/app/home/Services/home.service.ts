import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, Pagination } from 'src/app/Shared/models/Interfaces';
import { APIs } from 'src/app/core/API/apis';
import { ApiCallerService } from 'src/app/core/Services/api-caller.service';

@Injectable()
export class HomeService {

  constructor(private apiCaller:ApiCallerService) { }


  getProduct() :Observable<Pagination<IProduct>>{
   return this.apiCaller.get(APIs.Product.GetAllProducts);
  }
}

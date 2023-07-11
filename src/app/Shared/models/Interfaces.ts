export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productType: string;
  productBrand: string;
}

export interface Pagination<T> {
  pageIndex:number;
  pageSize:number;
  count:number;
  data:T [];
}

export interface  Lookups{
    name: string,
    id:number
}

export interface ProductFilters{
  PageIndex:number,
  PageSize:number,
  BrandId:number,
  TypeId:number,
  Sort:string
  Search:string;
}

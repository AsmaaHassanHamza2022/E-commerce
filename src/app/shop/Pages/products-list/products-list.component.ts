import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import {
  IProduct,
  Lookups,
  Pagination,
  ProductFilters,
} from 'src/app/Shared/models/Interfaces';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  finalize,
  forkJoin,
  fromEvent,
  map,
} from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartService } from 'src/app/cart/Services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  public productsBrands: Lookups[] = [];
  public productsTypes: Lookups[] = [];
  public selectedBrand: Lookups | undefined;
  public selectedType: Lookups | undefined;
  public searchKey: any;
  public items: Pagination<IProduct> | undefined;
  public Products: IProduct[] = [];
  public filters: ProductFilters = {} as ProductFilters;
  public first: number = 0;
  public rows: number = 10;

  @ViewChild('searchInput') searchInput?: ElementRef;
  constructor(
    private productsService: ProductsService,
    private spinner: NgxSpinnerService,
    private cartService:CartService
  ) {}
  ngAfterViewInit(): void {
    fromEvent(this.searchInput?.nativeElement, 'keyup')
      .pipe(
        map(() => this.searchKey),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((res: any) => {
        this.filters.Search = res;
        this.getProducts();
      });
  }
  ngOnInit() {
    this.getLookups();
  }

  private getLookups() {
    const brand$ = this.productsService.getProductsBrandes();
    const types$ = this.productsService.getProductsTypes();
    forkJoin(brand$, types$).subscribe(([brands, types]) => {
      this.getProducts();
      this.productsBrands = brands;
      this.productsTypes = types;
    });
  }

  private getProducts() {
    this.spinner.show();
    this.productsService
      .getAllProducts(this.filters)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((products) => {
        this.items = products;
        this.Products = products.data;
      });
  }
  public onBrandChange(evt: any) {
    this.filters.BrandId = evt?.value?.id;
    this.getProducts();
  }
  public onTypeChange(evt: any) {
    this.filters.TypeId = evt?.value?.id;
    this.getProducts();
  }
  public addToCart(product:IProduct){
    this.cartService.addToCart(product);

  }

  public onPageChange(event: any) {
    this.filters.PageIndex = event.page;
    this.filters.PageSize = event.rows;
    this.getProducts();
  }
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { PrimNgModule } from '../prim-ng/prim-ng.module';
import { SliceLongTextPipe } from './Pipes/slice-long-text.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { ProductCounterComponent } from './Components/product-counter/product-counter.component';

const modules=[
  ProductItemComponent,
  SliceLongTextPipe,
  SpinnerComponent,
  ProductCounterComponent
]

@NgModule({
  declarations: [
   ...modules,
  ],
  imports: [
    CommonModule,
    PrimNgModule,
    TranslateModule,
    NgxSpinnerModule,
    RouterModule,
    
    
  ],
  exports:[
    PrimNgModule,
    ...modules
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';




const modules:any=[
  CommonModule, 
  ToastModule,
  CardModule,
  ButtonModule,
  TooltipModule,
  DropdownModule,
  InputTextModule,
  PaginatorModule

]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [],
})
export class PrimNgModule {}

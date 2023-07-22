import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PrimNgModule } from '../prim-ng/prim-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IdentityService } from './services/identity.service';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    PrimNgModule,
    ReactiveFormsModule
  ],
})
export class IdentityModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexErrors } from 'src/app/Shared/Utilities/formValidationError';
import { regex } from 'src/app/Shared/Utilities/pattrens';
import { IdentityService } from '../../services/identity.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  public loginForm:FormGroup=new FormGroup({});
  public errorMessages:any=regexErrors;
  public formSubmitted:boolean=false;

  constructor(private formBuilder: FormBuilder ,private spinner: NgxSpinnerService,
 private indentitySer:IdentityService ,private router:Router) {
  }
  ngOnInit(): void {
    this.initForm();

  }
  public get f(){
    return this.loginForm.controls;

  }

  initForm(){
    this.loginForm=this.formBuilder.group({
      email:[null,[Validators.required ,Validators.pattern(regex.email)]],
      password:[null,[Validators.required,Validators.pattern(regex.password)]]
    })
  }

  login(){
   this.loginForm.markAllAsTouched();
   if(this.loginForm.invalid){
    return;
   }
   else{
  this.spinner.show();
    this.indentitySer.login(this.loginForm.value).pipe(finalize(()=>this.spinner.hide())).subscribe((res)=>{
      this.router.navigate(['/']);

    })

    
   }
  }
}

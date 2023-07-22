import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexErrors } from 'src/app/Shared/Utilities/formValidationError';
import { IdentityService } from '../../services/identity.service';
import { Router } from '@angular/router';
import { regex } from 'src/app/Shared/Utilities/pattrens';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm:FormGroup=new FormGroup({});
  public errorMessages:any=regexErrors;
  public formSubmitted:boolean=false;

  constructor(private formBuilder: FormBuilder ,private spinner: NgxSpinnerService,private indentitySer:IdentityService ,private router:Router) {
  }
  ngOnInit(): void {
    this.initForm();

  }
  public get f(){
    return this.registerForm.controls;

  }

  initForm(){
    this.registerForm=this.formBuilder.group({
      displayName:[null,[Validators.required]],
      email:[null,[Validators.required ,Validators.pattern(regex.email)]],
      password:[null,[Validators.required,Validators.pattern(regex.password)]]
    })
  }
  register(){
    this.registerForm.markAllAsTouched();
   if(this.registerForm.invalid){
    return;
   }
   else{
    this.spinner.show();
    this.indentitySer.register(this.registerForm.value).pipe(finalize(()=>this.spinner.hide())).subscribe((res)=>{
      this.router.navigate(['/']);

    })

    
   }
   
  }
}

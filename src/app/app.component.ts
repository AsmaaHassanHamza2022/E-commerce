import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LanguageService } from './Shared/Services/language.service';
import { AuthonticationService } from './core/Services/authontication.service';
import { IdentityService } from './identity/services/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent implements OnInit {
  title = 'Furniture-E-Commerce';



  constructor(private languageService:LanguageService ,private identitySer:IdentityService){
    this.languageService.useLang('en');

  }
  ngOnInit(): void {
    if(!!localStorage.getItem('token')){
      this.identitySer.getUserData().subscribe();

    }
  }

}

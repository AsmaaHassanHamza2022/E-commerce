import { AfterViewInit, Component } from '@angular/core';
import { LanguageService } from './Shared/Services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[]
})
export class AppComponent {
  title = 'Furniture-E-Commerce';



  constructor(private languageService:LanguageService){
    this.languageService.useLang('en');

  }

}

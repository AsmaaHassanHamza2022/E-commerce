import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/Services/cart.service';
import { IcartItem } from 'src/app/cart/models/cart';
import { AuthonticationService } from 'src/app/core/Services/authontication.service';
import { IdentityService } from 'src/app/identity/services/identity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public toggleNavbar:boolean=false;
  public items:any[]=[];
  constructor(public cartService:CartService ,public authSer:AuthonticationService ,private router:Router) {}
  ngOnInit(): void {
    this.items = [
      {
          items: [
              {
                  label: 'Orders',
                  icon: 'pi pi-refresh',
                  command: () => {
                      
                  }
              },
              {
                  label: 'Logout',
                  icon: 'pi pi-sign-out',
                  command: () => {
                      this.logout();
                  }
              }
          ]
      },
     
  ];
  }
  logout(){
    this.authSer.clearUserData();
    this.router.navigate(['/auth/login']);

   

  }
  getCartItemsCount(items:IcartItem[]){
    return items.reduce((e1,e2)=>{
      return e1+e2.quantity
    },0)
  }
  
  ToggleNavBar() {
    this.toggleNavbar =!this.toggleNavbar;
  }
}

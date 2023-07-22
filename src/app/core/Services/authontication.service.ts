import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILoginResponseData } from 'src/app/identity/models/identity';

@Injectable({
  providedIn: 'root',
})
export class AuthonticationService {
  public currentUser: BehaviorSubject<ILoginResponseData | null> =
    new BehaviorSubject<ILoginResponseData | null>(null);


  setCurrentUserData(data:ILoginResponseData){
    this.currentUser.next(data);
    localStorage.setItem('token',data.token);
  }

  get currentUserData(){
    return this.currentUser.asObservable();
  }

  clearUserData(){
    this.currentUser.next(null);
    localStorage.removeItem('token');


  }

  constructor() {}
}

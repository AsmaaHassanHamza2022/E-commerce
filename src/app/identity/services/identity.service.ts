import { Injectable } from '@angular/core';
import { ApiCallerService } from 'src/app/core/Services/api-caller.service';
import { ICreateNewAccount, ILoginResponseData, IUserCerdentionalData } from '../models/identity';
import { APIs } from 'src/app/core/API/apis';
import { Observable, map, tap } from 'rxjs';
import { AuthonticationService } from 'src/app/core/Services/authontication.service';

@Injectable(
  {providedIn:'root'}
)
export class IdentityService {
  constructor(
    private apiService: ApiCallerService,
    private authService: AuthonticationService
  ) {}

  public login(
    userCerdentials: IUserCerdentionalData
  ): Observable<ILoginResponseData> {
    return this.apiService
      .post<ILoginResponseData>(APIs.Indentity.login, userCerdentials)
      .pipe(
        tap((data) => {
          this.authService.setCurrentUserData(data);
          return data;
        })
      );
}
public register(UserData:ICreateNewAccount):Observable<ILoginResponseData>{
return this,this.apiService.post<ILoginResponseData>(APIs.Indentity.registers,UserData).
pipe(tap((data)=>this.authService.setCurrentUserData(data)));

}

public getUserData():Observable<ILoginResponseData>{
  return this.apiService.get<ILoginResponseData>(APIs.Indentity.getUserData).
  pipe(tap((data)=>this.authService.setCurrentUserData(data)));
}

}
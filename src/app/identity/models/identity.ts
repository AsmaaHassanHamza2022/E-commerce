export interface IUserCerdentionalData {
  email: string;
  password: string;
}
export interface ILoginResponseData{
  email:string;
  displayName:string;
  token:string;
}

export interface ICreateNewAccount{
  displayName: string,
  email:string,
  password: string
}
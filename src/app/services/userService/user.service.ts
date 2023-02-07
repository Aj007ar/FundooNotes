import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IForget, ILogin, IRegister, Ireset } from '../userInterface/user-interface.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  signup(payload:IRegister)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/user/userSignUp", payload, false, header)
  }
  login(payload:ILogin)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/user/login", payload, false, header)
  }
  forget(payload:IForget)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/user/reset", payload, false, header)
  }
  reset(payload:Ireset)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService("/user/reset-password", payload, false, header)
  }
}

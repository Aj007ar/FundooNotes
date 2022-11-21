import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseurl

  constructor(private httpclient:HttpClient) { }

  postService(url: string, reqData: any, token: boolean = false, httpOptions: any) {
    return this.httpclient.post(this.baseUrl+url,reqData,token && httpOptions)
  }
  getService(url: string,token: boolean = true, httpOptions: any) {
    return this.httpclient.get(this.baseUrl+url,token && httpOptions)
  }
  putService(){
  }
  deleteService() {
    
  }
  patchService() {

  }
}

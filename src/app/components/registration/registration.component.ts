import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public getJsonValue:any;
  public postJsonValue:any;

  constructor(private http:HttpClient) { 
  
  }

  ngOnInit(): void {
    this.createUser();
  }
  public createUser(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "http://172.16.15.56:8080/ExxonMobil/V1/state";
  data = { userId : 'test_tmr', userToken : '1991e133232401deTEST', deviceId : '1991e133232401de', campId : '1', responseToken : '38F373F7153C9606ECCFD8362C687250'};   

  constructor(private http: HttpClient) { }
 
  postData() {

    console.log(this.url);
    console.log(this.data);
      let httpHeaders = new HttpHeaders({
           'Content-Type' : 'application/json'
      });    
      return this.http.post(this.url, this.data,
          {
            headers: httpHeaders,
            observe: 'response'
          }
      );
  }    
     
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = "https://staging.denave.com:8443/ExxonMobil/V1/";
  data = { userId : 'test_tmr', userToken : '1991e133232401deTEST', deviceId : '1991e133232401de', campId : '1', responseToken : '38F373F7153C9606ECCFD8362C687250'};   

  constructor(private http: HttpClient) { }
 
  postData({ inputText, inputService }: { inputText: string; inputService: string; }) {

    this.url = this.url + inputService;
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

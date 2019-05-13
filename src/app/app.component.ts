import { Component, OnInit  } from '@angular/core';
import { DataService  } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'consume-service';
  data:any;
  inputText:string;
  inputService:string;
  temp:any;
  output:any;
  history = '';
  constructor(private dataService: DataService) {
  }
  ngOnInit() {}

  public saveData() {
    
    this.dataService.postData({ inputText: this.inputText, inputService: this.inputService }).subscribe(res => { 
         this.data = res.body;
         this.data.Userdata = this.inputText;
         this.temp = "User Input: " + this.inputText + "\n\n";
         this.temp = this.temp + "Web service URL: https://staging.denave.com:8443/ExxonMobil/V1/" + this.inputService + "\n\n";
         this.temp = this.temp + "Request data sent to web service: " + JSON.stringify(this.dataService.data) + "\n\n";
         this.temp = this.temp + "Response from web service: \n" + JSON.stringify(this.data) + "\n\n-------------------------------------------------------\n\n";
         this.history = this.history + this.temp;
         this.output = this.history;		
         this.dataService.url = "https://staging.denave.com:8443/ExxonMobil/V1/"; 	  
       },
 (err: HttpErrorResponse) => {
         if (err.error instanceof Error) {
           //A client-side or network error occurred.				 
           console.log('An error occurred:', err.error.message);
         } else {
           //Backend returns unsuccessful response codes such as 404, 500 etc.				 
          //  console.log('Backend returned status code: ', err.status);
          //  console.log('Response body:', err.error);
         }
       }
    );
 }
}

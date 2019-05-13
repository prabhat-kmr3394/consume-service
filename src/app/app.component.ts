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
  data:any;inputText:string;inputService:string;
  constructor(private dataService: DataService) {
  }
  ngOnInit() {}

  public saveData() {
    
    this.dataService.postData({ inputText: this.inputText, inputService: this.inputService }).subscribe(res => { 
         this.data = res.body;
         this.data.Userdata = this.inputText;
         console.log(this.data);
         console.log(res.headers.get('Content-Type'));		
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

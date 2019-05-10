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
  inputText = '';
  constructor(private dataService: DataService) {
  }
  ngOnInit() {}

  public saveData(inputText: any) {
    
    this.dataService.postData().subscribe(res => { 
         this.data = res.body;
         console.log(inputText);
         this.data.Userdata = inputText;
         console.log(this.data);
         console.log(res.headers.get('Content-Type'));		
        	  
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

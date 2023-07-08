import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  isManuRequire=false;
  isAdmin=false;
  title = 'CRM';   
  constructor(private router:Router,private service:AuthService){}

  ngDoCheck(): void {
    let currentUrl=this.router.url;
    if(currentUrl =="/login"||  currentUrl=="/register"){
      this.isManuRequire=false;
    }
    else{
      this.isManuRequire=true;
    }
      if(this.service .getUserRole()=="admin"){
        this.isAdmin=true;
      }
      else{
        this.isAdmin=false;     }
    }
 
}

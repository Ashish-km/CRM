import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  baseAPI = ("http://localhost:3000/user")

  //return all data via get method
  getAll() {
    return this.http.get(this.baseAPI)
  }
  //GETaLLROLE
  getAllRole(){
return this.http.get("http://localhost:3000/role")
  } 
  //get record by single id 
  getById(id: any) {
    return this.http.get(this.baseAPI + '/' + id);
  }
   //register user  via post method
   registerData(inputeData: any){
     return this.http.post(this.baseAPI,inputeData)    
   }
//update user via put method 
   updateData(id:any, inputeData:any){
    debugger;
    return this.http.put(this.baseAPI+'/'+id,inputeData)
   }
     //getUsername
     isLoggedIn(){
      return sessionStorage.getItem('username')!=null; 
     }
 
     //getuserrole
      getUserRole(){
        return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
      }
}

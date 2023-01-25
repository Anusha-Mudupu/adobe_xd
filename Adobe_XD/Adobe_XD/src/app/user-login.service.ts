import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
// loginUrl='http://localhost:3000/userlogin'
  constructor(private HttpClient:HttpClient) { }
  userLogin(){
  //:Observable<any>{
    // const httpOptions = {
    //   headers:new HttpHeaders({
    //  'Content-Type' : 'application/json',
    //  'Accept' : 'application/json',
    //  'responseType':'text',
    //  'Access-Control-Allow-Origin':'http://192.168.0.169:9090',
    //  'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
    //  'Access-Control-Allow-Headers':'Content-Type:application/json',
    //  'Authorization':'my-auth-token'
    //   })  
    // };
    // return this.HttpClient.post('http://localhost:3000/userlogin')
  }
isLoggedIn(){
  return !!localStorage.getItem('token')

}



}

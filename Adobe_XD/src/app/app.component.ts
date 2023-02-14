import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Adobe_XD';
  public name:any;
  private _number:any;
  get number(){
 return this._number
  }
  set number(val:any){
 this._number=val;
 if(val >=18){
  console.log("eligible")
 }
 else{
  alert("not eligible")
 }
  }
}

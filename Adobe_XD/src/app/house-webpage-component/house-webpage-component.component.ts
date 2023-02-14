import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-webpage-component',
  templateUrl: './house-webpage-component.component.html',
  styleUrls: ['./house-webpage-component.component.css']
})
export class HouseWebpageComponentComponent implements OnInit{
constructor(private route:Router){

}
ngOnInit(){

}
goToFeatures(){
  this.route.navigate(['house-features'])
}
goToService(){
  this.route.navigate(['house-service'])
}
goToContactUs(){
this.route.navigate(['house-contact'])
}
}

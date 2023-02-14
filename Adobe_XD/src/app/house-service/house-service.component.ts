import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-service',
  templateUrl: './house-service.component.html',
  styleUrls: ['./house-service.component.css']
})
export class HouseServiceComponent implements OnInit{
constructor(private route:Router){

}
ngOnInit(){

}
goToFeatures(){
  this.route.navigate(['house-features'])
}
goToContactUs(){
this.route.navigate(['house-contact'])
}
goToHome(){
 this.route.navigate(['house-webpage'])
}
}

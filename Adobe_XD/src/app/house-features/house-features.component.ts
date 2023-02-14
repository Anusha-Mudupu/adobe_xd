import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-features',
  templateUrl: './house-features.component.html',
  styleUrls: ['./house-features.component.css']
})
export class HouseFeaturesComponent implements OnInit{
constructor(private route:Router){

}
ngOnInit(){

}

goToService(){
  this.route.navigate(['house-service'])
}
goToContactUs(){
this.route.navigate(['house-contact'])
}
goToHome(){
 this.route.navigate(['house-webpage'])
}
}

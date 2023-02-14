import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dmantz-technologies',
  templateUrl: './dmantz-technologies.component.html',
  styleUrls: ['./dmantz-technologies.component.css']
})
export class DmantzTechnologiesComponent implements OnInit {
constructor( private route:Router){

}
ngOnInit(){

}
goToHomePage(){
 this.route.navigate(['Dmantz-home-page'])
}
}

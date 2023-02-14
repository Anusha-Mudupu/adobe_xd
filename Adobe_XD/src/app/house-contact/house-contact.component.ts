import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-contact',
  templateUrl: './house-contact.component.html',
  styleUrls: ['./house-contact.component.css']
})
export class HouseContactComponent implements OnInit{
  constructor(private route:Router){

  }
  ngOnInit(){
  
  }
  goToService(){
    this.route.navigate(['house-service'])
  }
  goToFeatures(){
  this.route.navigate(['house-features'])
  }
  goToHome(){
   this.route.navigate(['house-webpage'])
  }
  }
  

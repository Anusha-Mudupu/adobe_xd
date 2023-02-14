import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radio-station',
  templateUrl: './radio-station.component.html',
  styleUrls: ['./radio-station.component.css']
})
export class RadioStationComponent implements OnInit  {
  constructor(private router:Router){

  }
  ngOnInit(): void {
    
  }
  goToLoginPage(){
     this.router.navigate(['user-registration-form'])
  }
}
  

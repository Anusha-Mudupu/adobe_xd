import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dmantz-home-page',
  templateUrl: './dmantz-home-page.component.html',
  styleUrls: ['./dmantz-home-page.component.css']
})
export class DmantzHomePageComponent {
  constructor( private route:Router){ }
  ngOnInit(){
   
  }
javaData(){
  this.route.navigate(['java-course'])
}
angularData(){
  this.route.navigate(['angular-course'])
}
pythonData(){
  this.route.navigate(['python-course'])
}
}

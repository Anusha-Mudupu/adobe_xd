import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.css']
})
export class TechnologyStackComponent {
    tutorials:any
    id:any
    stack:any
   constructor(private tutorialService:UserLoginService,private route:Router, private activate:ActivatedRoute){}
  
 

 ngOnInit(){
this.tutorialService.getTutorials().subscribe((data)=>{
  this.tutorials=data;
  // this.onClick()
})
   }


//    onClick(){
// this.id=this.activate.snapshot.params['id'];
// this.tutorialService.getEmployeeByid(this.id).subscribe((data)=>{
//   this.tutorials=data;

// })
 
//}
onClick(){
  
}
}





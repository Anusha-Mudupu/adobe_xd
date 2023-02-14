import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit {
  cdata='';
 
constructor(){}

ngOnInit(): void {
  
}
@ViewChild(ViewChildComponent) ViewChild:any
test(){
this.cdata=this.ViewChild.passToParent()
}

}

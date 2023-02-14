import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  data = 'data from child component'
  constructor() { }
  ngOnInit(): void {

  }
  passToParent() {
    console.log(this.data)
    return this.data
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang7',
  templateUrl: './ang7.component.html',
  styleUrls: ['./ang7.component.scss']
})
export class Ang7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickButton(){
    console.log('this is clicked')
  }

}

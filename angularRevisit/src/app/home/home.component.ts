import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string="farman Abbasi";
  // gola: boolean=true;
  constructor() { }

  ngOnInit() {
  
  }
  countClick(){
    this.clickCounter+=1;
   
  }
  countClickReduce(){
    if(this.clickCounter>0){
      this.clickCounter-=1;

    }
  }
 


}

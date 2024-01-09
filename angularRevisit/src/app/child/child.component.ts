import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { OutletContext } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges{
//Note: both are used in child i.e child takes from parent and child gives to parent
// if we have to use something in parent use @ViewChild
  @Input() childName: string ="" ;
  @Output() eventMe2 = new EventEmitter<any>();
  dataFromService: string = "";

  children =["baby1","baby2"];
  constructor(public globals: HttpService){
    console.log('ngOnInit:', this.childName); // Should have the correct value

      //use subject to pass and use data between components 
    this.globals.dataMe$.subscribe(data=>{
      this.dataFromService = data;
     })      
     console.log(this.dataFromService)
     console.log(this.globals.golu)

  }
  ngOnInit() {
    // This is a safer place to access input properties
    console.log('ngOnInit:', this.childName); // Should have the correct value
    this.sendHiToParent();
  }

  sendHiToParent():void{
    this.eventMe2.emit({"name":this.childName,"message": "Hi dad"})
  }

  doSomething() {
    console.log('Child component is doing something.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['childName']){
      const updatedName = changes['childName'].currentValue;
      console.log('ngOnChanges triggered:', updatedName)

    }


  }

  



}

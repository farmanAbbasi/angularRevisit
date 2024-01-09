import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  title = 'angularRevisit';
  nameGivenByParent: string = "baby 1";

  ngOnInit() {
    //this.seeChild() does not work as child is not loaded yet
  }
  constructor(public globals: HttpService){
   this.globals.dataMe$.subscribe(data=>{
    this.dataFromService = data;

   })      
   console.log(this.dataFromService)
   console.log(this.globals.golu)


  }
  

  receiveMessage(event: object) {
    console.log("In parent: ", event)
  }

  ngAfterViewInit() {
    this.seeChild() //works as child has loaded
  }

  seeChild() {
    if (this.childComponent) {
      console.log("View child from children: ", this.childComponent.children)
      this.childComponent.doSomething();
    }
  }


  // Note understanding ViewChiild has also told that ok we can access childs thing and also explained about
  // ngAfterViewInit lifecycle hook


  useMyOnChanges(){
    this.nameGivenByParent = "new baby name"
  }

    //use subject to pass and use data between components
    dataFromService: string = "";
    newData: string = "";

    updateData() {
      this.globals.updateData(this.newData);
    }

    chnageGolufromParent(new_golu:string){
         this.globals.golu += new_golu 
  }

}

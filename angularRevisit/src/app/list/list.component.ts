import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Brew } from '../model/Brew';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Observable<Brew[]>;
  brews2: Brew[] = [];
  brews3: Brew[] = [];
  color:string = "";
  data4:any;
  mySubject = new Subject<number>();
  myBSubject = new BehaviorSubject<number>(0);

  private dataSubject = new Subject<any>();
  dataDaddy$ = this.dataSubject.asObservable();



  constructor(public http: HttpService) {
    this.http.myMethod();
    //1
    //this.data and this.brews are observables so in the html we have to use
    // async pipe
    this.brews = this.http.getSomethingUsingObservable();

    //2
    //this is returning a promise
    this.fetchData();

    //3
    //this returns ob
    this.http.getSomethingUsingSubscribe()
      .subscribe((data) => {
        this.brews3 = data;
      })

   this.http.getSomethingUsingSubscribe()
   .subscribe(
    (data) => {
      this.dataSubject.next(data);
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );   


    this.mySubject.next(1);
    this.mySubject.next(11);
    this.mySubject.next(12);

    this.mySubject.subscribe(value => {
      console.log(value); // This subscriber will not receive the previously emitted value 1
    });

    this.mySubject.next(2); // This subscriber will receive the value 2
    this.mySubject.next(3); // This subscriber will receive the value 3



    this.myBSubject.next(1);
    this.myBSubject.next(11);
    this.myBSubject.next(12);

    this.myBSubject.subscribe(value => {
      console.log(value);
    })
    // This subscriber will receive the previously emitted value 12 (Note not all previous values )

    this.myBSubject.next(2); // This subscriber will receive the value 2
    this.myBSubject.next(3); // This subscriber will receive the value 3
    // In summary, the primary difference between Subject and BehaviorSubject is that BehaviorSubject
    //  remembers and immediately provides the last emitted value to new subscribers, while a regular Subject
    //   does not store the previous values and only emits values that occur after subscription.

  }

  //note: async is used for method 2 , method 1 and 3 will work without this also 
  ngOnInit() {
    this.fetchingData2()
    this.http.dataDaddy$.subscribe(
      (receivedData) => {
        this.data4 = receivedData;
        console.log(this.data4);
      },
      (error) => {
        console.error('Error receiving data:', error);
      }
    );
  }

  fetchingData2() {
    // Trigger the fetchData method in the service
    this.http.fetchingData();
  }

  //use promise async await
  async fetchData() {
    try {
      this.brews2 = await lastValueFrom(this.http.getSomethingUsingSubscribe());
      console.log(this.brews2);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }





}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brew } from './model/Brew';
import { tap , delay } from 'rxjs/operators';
import { Observable, Subject,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private dataSubject = new Subject<any>();
  dataDaddy$ = this.dataSubject.asObservable();


  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('Hey, what is up!');
  }

  getSomethingUsingObservable() {
    return this.http.get<Brew[]>('https://api.openbrewerydb.org/breweries')
    .pipe(
      delay(5000))
  }

  getSomethingUsingPromise():Observable<Brew[]> { 
    return this.http.get<Brew[]>('https://api.openbrewerydb.org/breweries');
  }

  getSomethingUsingSubscribe() {
    return this.http.get<Brew[]>('https://api.openbrewerydb.org/breweries')
  }


  fetchingData() {
    this.http.get('https://api.openbrewerydb.org/breweries').subscribe(
      (data) => {
        this.dataSubject.next(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


  //use subject to pass and use data between components
  // import { BehaviorSubject } from 'rxjs';
  private dataSubject2  =  new BehaviorSubject<string>("Initail BS value");
  dataMe$ = this.dataSubject2.asObservable(); //to be used while subscribing

  updateData(newData:string){
       this.dataSubject2.next(newData);
  }

  golu = "heyGolu"
  changeGolu(new_golu:string){
    this.golu =new_golu
  }

  getData(){
    let postData={
      script : "print('hello world')",
      "language": 'python3',
      "vserionIndex":3,
      "clientId": "afc751fc18ad19bc8ae8c27335f929d4",
      "clientSecret":"195490c7a338d8110dc659ffa441d575eea64131049fda63bf082a80f97de333"
    }
    return this.http.post("https://cors-anywhere.herokuapp.com/https://api.jdoodle.com/v1/execute",postData);
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebservicesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WebservicesProvider Provider');
  }

  getPeople() {
    return this.http.get<any>('https://swapi.co/api/people');
  }

}

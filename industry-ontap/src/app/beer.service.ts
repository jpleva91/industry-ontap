import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeerService {

  constructor(private http: Http) { }

  // getBeer() {
  // 	return http.get();
  // }

  // newBeer() {
  // 	return http.post();
  // }
}

import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeerService {

	base_url = '';

  constructor(private http: Http) { 
  	if(isDevMode()){
  		this.base_url = 'http://localhost:3000';
  	}
  }

  getBeer() {
  	return this.http.get(`${this.base_url}/taps`);
  }

  newBeer(object) {
  	return this.http.post(`${this.base_url}/taps`, object);
  }
}

import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeerService {

	base_url = '';

  constructor(private http: Http) { 
  	if(isDevMode()){
  		this.base_url = 'http://localhost:4200';
  	}
  }

  getBeer() {
  	return this.http.get(`${base_url}/taps`);
  }

  newBeer(object) {
  	return this.http.post(`${base_url}/taps/`, object);
  }
}

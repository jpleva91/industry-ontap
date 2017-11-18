import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BeerService {

	base_url = '';

  constructor(private http: Http) { 
  	if(isDevMode()){
  		base_url = 'http://localhost:4200';
  	}
  }

  getBeer() {
  	return http.get(`${base_url}/taps`);
  }

  newBeer() {
  	return http.post(`${base_url}/taps`);
  }
}
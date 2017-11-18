import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {
	tapOptions: any = ['Central', 'Upstairs', 'North', 'South'];
	beerInput: string = '';
	tap: string = '';

  constructor(
		private beerService : BeerService
  	) { }

  ngOnInit() {
  }

  submit(beer, tap){

  	/* TODO: PostBeer */
  	console.log('submited');
  	console.log({
  		tap: this.tap,
  		beer: this.beerInput
  	});
    let newBeer = {
      tap: this.tap,
      beer: this.beerInput
    }
    this.beerService.newBeer(newBeer);
  }

}

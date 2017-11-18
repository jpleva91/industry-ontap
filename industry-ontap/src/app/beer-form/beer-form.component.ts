import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
//import { FormsModule } from '@angular/forms';
/* import beer service
import { BeerService } from '../beer.service.ts';
*/

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit {
	tapOptions = ['Central', 'Upstairs', 'North', 'South'];
	beerInput: string = '';
	tap: string = '';

  constructor(
  	/*Beer service
		private beerService : BeerService
  	*/
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
  }

}

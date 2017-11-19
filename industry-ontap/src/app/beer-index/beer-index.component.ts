import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-index',
  templateUrl: './beer-index.component.html',
  styleUrls: ['./beer-index.component.css']
})
export class BeerIndexComponent implements OnInit {
	beers = [];

  constructor() { }

  ngOnInit() {
  	/* TODO: Call beers api */
  	this.beers = [
  		{
  			tap: 'Central',
  			beer: 'bud'
  		},
  		{
  			tap: 'Upstairs',
  			beer: 'bud'
  		},
  		{
  			tap: 'North',
  			beer: 'bud'
  		},
  		{
  			tap: 'South',
  			beer: 'bud'
  		}
  	];
  }

}

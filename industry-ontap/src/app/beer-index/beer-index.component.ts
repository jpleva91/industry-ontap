import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service'

@Component({
  selector: 'app-beer-index',
  templateUrl: './beer-index.component.html',
  styleUrls: ['./beer-index.component.css']
})
export class BeerIndexComponent implements OnInit {
	beers = [];

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  	this.beerService.getBeer().subscribe(response => {
  		this.beers = response.json();
  	})
  }

}

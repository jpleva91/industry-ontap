import React, { Component } from 'react';
import { TapComponent } from './';

class TapListComponent extends Component {
	render(){
		let allTaps = this.props.tapList.map(tap => {
			return (
				<TapComponent 
					tapName={tap.name} 
					beerName={tap.beers[tap.beers.length - 1]} 
					lastUpdated={tap.lastUpdated} />
			)
		});
		return (
			<div className="container">{allTaps}</div>
		)
	}
}

export { TapListComponent };
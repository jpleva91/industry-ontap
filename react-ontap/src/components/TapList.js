import React from 'react';
import { TapComponent } from './';

const TapListComponent = (props) => {
	/* Render each tap component */
	let allTaps = props.tapList.map((tap, i) => {
		let stringDate = (new Date(tap.lastUpdated)).toLocaleString();

		return (
			<TapComponent 
				key={i} 
				tapName={tap.name} 
				beerName={tap.beers[tap.beers.length - 1]} 
				lastUpdated={stringDate} />
		)
	});

	return <div className="container">{allTaps}</div>
}

export { TapListComponent };
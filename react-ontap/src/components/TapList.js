import React from 'react';
import { TapComponent } from './';

const TapListComponent = (props) => {
	/* Render each tap component */
	let allTaps = props.tapList.map((tap, i) => {
		return (
			<TapComponent 
				key={i} 
				tapName={tap.name} 
				beerName={tap.beers[tap.beers.length - 1]} 
				lastUpdated={tap.lastUpdated} />
		)
	});

	return <div className="container">{allTaps}</div>
}

export { TapListComponent };
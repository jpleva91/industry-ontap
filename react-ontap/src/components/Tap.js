import React from 'react';

const TapComponent = (props) => (
	<div className="card text-center">
		<div className="card-header">{props.tapName}</div>
		<div className="card-body">
			<h4 className="card-title">{props.beerName}</h4>
		</div>
		<div className="card-footer text-muted">
			last updated: {props.lastUpdated}
		</div>
	</div>
)


export { TapComponent }
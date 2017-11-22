import React from 'react';

class TapFormComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			beerName: '',
			tapName: 'Central'
		};

		this.handleBeerChange = this.handleBeerChange.bind(this);
		this.handleTapChange = this.handleTapChange.bind(this);
	}

	handleBeerChange(event){
		this.setState({
			beerName: event.target.value
		});
	}

	handleTapChange(event){
		this.setState({
			tapName: event.target.value
		});
	}

	render(){
		let tapOptions = this.props.tapLocations.map((tap, i) => {
			return (<option value={tap} key={i}>{tap}</option>);
		});

		return (
			<div className="container">
				<form className="text-center" onSubmit={(e) => this.props.handleSubmit(e,this.state.tapName,this.state.beerName)}>
					
					<div className="form-group">
						<label>Tap:
							<select 
								value={this.state.tapName}
								onChange={this.handleTapChange}
								className="form-control" 
								required>
								{tapOptions}
							</select>
						</label>
					</div>
					
					<div className="form-group">
						<label>Beer:
						<input 
							className="form-control" 
							type="text" 
							value={this.state.beerName} 
							onChange={this.handleBeerChange}
							required />
						</label>
					</div>
					
					<input className="btn btn-success" type="submit" value="UPDATE BEER" />
				</form>
			</div>
		)
	}
}

export { TapFormComponent };
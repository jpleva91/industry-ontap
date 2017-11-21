import React, { Component } from 'react';
import axios from 'axios';
import './lib/css/bootstrap.min.css'; /* Bootstrap 4 */
import './App.css';
import { TapListComponent, TapFormComponent } from './components';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tapLocations: ['Central', 'North', 'Upstairs', 'South'],
      taps: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:3001/taps')
      .then(res => {
        /* add data to state */
        this.setState({
          taps: res.data
        });
      });
  }

  handleSubmit(event, tapName, beerName){
    event.preventDefault();
    console.log({tapName: tapName, beer: beerName});
    /* API POST */
    axios.post('http://localhost:3001/taps',{tapName: tapName, beer: beerName})
      .then(res => {
        /* Update state */
        let currentTaps = this.state.taps.map(tap => {
          if(tap.name === res.data.name){
            return res.data;
          }
          return tap;
        });
        this.setState({taps: currentTaps});
      });
  }

  render() {
    return (
      <div>
        <h1>Whats On Tap</h1>
        <TapListComponent tapList={this.state.taps} />
        <TapFormComponent tapLocations={this.state.tapLocations} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

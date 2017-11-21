import React, { Component } from 'react';
import './App.css';
import { TapListComponent } from './components';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      response:[
      {
      _id: "5a123f7649d38b037ed4dc3a",
      name: "Central",
      lastUpdated: "2017-11-20T02:35:34.359Z",
      __v: 1,
      beers: [
      "Breck Vanilla Porter",
      "Ska Modus Hoperandi",
      "Dry Dock Apricot Blonde",
      "Lager"
      ]
      },
      {
      _id: "5a123f7649d38b037ed4dc3c",
      name: "North",
      lastUpdated: "2017-11-20T02:35:34.359Z",
      __v: 0,
      beers: [
      "DBC Pretzel Assassin",
      "DBC Graham Cracker Porter",
      "TRVE Cursed"
      ]
      },
      {
      _id: "5a123f7649d38b037ed4dc3b",
      name: "Upstairs",
      lastUpdated: "2017-11-20T02:35:34.359Z",
      __v: 2,
      beers: [
      "New Holland Dragons Milk",
      "Cerebral Dark Galaxy",
      "Epic Tart and Juicy",
      "SKA IPA",
      "Old Chub"
      ]
      },
      {
      _id: "5a123f7649d38b037ed4dc3d",
      name: "South",
      lastUpdated: "2017-11-20T02:35:34.359Z",
      __v: 1,
      beers: [
      "Ska True Blonde",
      "Oskar Blues Dales Pale Ale",
      "Oskar Blues Old Chub",
      "Stout"
      ]
      }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>Whats On Tap</h1>
        <TapListComponent tapList={this.state.response} />
      </div>
    );
  }
}

export default App;

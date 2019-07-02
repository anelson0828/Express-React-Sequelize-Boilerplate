import React from 'react';
import axios from 'axios';

//import components here
// import Map from './Map';
import Spots from './Spots';
import AddSpot from './AddSpot';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      spots: [],
      selectedSpot: {},
    };
    this.clickSpot = this.clickSpot.bind(this);
  }

  async clickSpot(spotId) {
    try {
      const response = await axios.get(`/api/spots/${spotId}`);
      const selectedSpot = response.data;
      return this.setState({ selectedSpot });
    } catch (error) {
      console.error(error);
    }
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/api/spots');
      const spots = response.data;
      this.setState({ spots });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <AddSpot />
        <Spots spots={this.state.spots} />
      </div>
    );
  }
}

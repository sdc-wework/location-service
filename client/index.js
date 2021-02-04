import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Components/Map';
import NearbyTransitList from './Components/NearbyTransitList';

const App = () => (
  <div className="map-wrapper">
    <h2>Location</h2>
    <address style={{
      'whiteSpace': 'pre-line',
      'marginBottom': '2rem'
  }}>
    415 Mission Street<br />
    San Francisco, CA 94105
    </address>
    <Map />
    <NearbyTransitList transitOptions={['option 1', 'option 2', 'option 3']}/>
  </div>
)

const root = document.getElementById('location-service');
ReactDOM.render(<App />, root);

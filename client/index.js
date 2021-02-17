import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Map from './Components/Map';
import NearbyTransitList from './Components/NearbyTransitList';

const App = () => {

  const [locationData, updateLocationData] = useState(
    {
      origin: {
        geometry: {
          coordinates: [0, 0]
        },
        streetName: 'loading',
        streetNumber: 'loading',
        city: 'loading',
        state: 'loading',
        zip: 'loading'
      },
      nearbyWorkspaces: []
    });

  const [nearbyTransits, updateNearbyTransits] = useState([]);
  const { origin } = locationData;
  const { streetName, streetNumber, city, state, zip } = origin;

  useEffect(() => {

    let splitUrl = window.location.pathname.split('/').filter(el => el);
    const id = splitUrl[splitUrl.length - 1];

    fetch(`/api/nearbyworkspaces/buildings/${id}`)
      .then(data => {
        return data.json()
      })
      .then(json => {
        updateLocationData(json);
      })
      .catch(err => {
        console.err(err);
      });

      fetch(`/api/getNearbyTransitOptions/${id}`)
        .then(data => {
          return data.json();
        })
        .then(json => {
          const options = json.nearbyTransitOptions;
          updateNearbyTransits(options);
        })

  }, []);

  return (
    <div className="map-wrapper">
      <h2 style={{
        'fontSize': '2rem',
        'fontWeight': '600',
        'lineHeight': '2.75rem',
        'marginBottom': '1rem',
      }}>Location</h2>
      <address style={{
        'whiteSpace': 'pre-line',
        'marginBottom': '2rem',
        'fontSize': '16px',
        'fontStyle': 'normal',
        'lineHeight': '1.5rem'
    }}>
      {streetNumber} {streetName}<br />
      {city}, {state} {zip}
      </address>
      <Map locationData={locationData}/>
      <NearbyTransitList nearbyTransits={nearbyTransits}/>
    </div>
  )
}


const root = document.getElementById('location-service');
ReactDOM.render(<App />, root);

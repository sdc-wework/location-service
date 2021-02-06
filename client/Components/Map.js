import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl';

const Wrapper = styled.div`
  #map {
    height: 320px;
  }

  .marker {
    width: 20px;
    height: 20px;
    background-color: #000;
    border: #000 4px solid;
    border-radius: 50%;
    opacity: 0.99;
  }
`

const Map = ({locationData}) => {

  const coordinates = [locationData.coordinates[1], locationData.coordinates[0]]

  useEffect(() => {
    mapboxgl.accessToken = process.env.KEY;
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates,
    zoom: 9
    });

    const geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: coordinates
        },
        properties: {
          title: locationData.streetNumber + ' ' + locationData.streetName,
        }
      }]
    };

    geojson.features.forEach(marker => {

      const el = document.createElement('div');
      el.className = 'marker';

      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25, closeButton: false }) // add popups
        .setHTML('<h3>' + marker.properties.title + '</h3>'))
        .addTo(map);
    });

});

  return (
    <Wrapper>
      <div id="map"></div>
    </Wrapper>
  )
}

export default Map;
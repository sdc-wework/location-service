import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl';

const Wrapper = styled.div`
  #map {
    height: 320px;
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
  });

  return (
    <Wrapper>
      <div id="map"></div>
    </Wrapper>
  )
}

export default Map;
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
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0dWxpbiIsImEiOiJja2pxM3l6bWkxZWxzMnFsZXB3ZTIzc3czIn0.7IMhPn6ShNGyxqpxSw-LCA';
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
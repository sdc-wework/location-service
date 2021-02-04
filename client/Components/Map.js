import React, {useEffect} from 'react';
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl';

const Wrapper = styled.div`
  #map {
    height: 320px;
  }

`

const Map = () => {

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN0dWxpbiIsImEiOiJja2pxM3l6bWkxZWxzMnFsZXB3ZTIzc3czIn0.7IMhPn6ShNGyxqpxSw-LCA';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40],
    zoom: 9
});
  }, []);

  return (
    <Wrapper>
      <div id="map"></div>
    </Wrapper>
  )
}

export default Map;
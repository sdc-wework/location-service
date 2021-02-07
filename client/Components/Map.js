import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

import mapboxgl from 'mapbox-gl';

const Wrapper = styled.div`
  #map {
    height: 320px;
  }

  .marker {
    width: 10px;
    height: 10px;
    background-color: #000;
    border: #000 4px solid;
    border-radius: 50%;
    opacity: 0.99;
  }

  .marker.nearby {
    background-color: transparent;
    border: blue 4px solid;
  }

  .building-link {
    line-height: 20px;
    height: 100%;
    width: 137.8px;
    color: blue;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    appearance: none;
    background: none;
    border: 0;
    padding: 0;
    outline: none;
  }

  .building-link:hover {
    text-decoration: underline
  }

`

const Map = ({locationData}) => {

  const { origin, nearbyWorkspaces } = locationData;
  const coordinates = origin.geometry.coordinates;

  useEffect(() => {

    mapboxgl.accessToken = process.env.KEY;
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates,
    zoom: 11
    });


    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
      .setLngLat(coordinates)
      .addTo(map)
      .setLngLat(coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25, closeButton: false })
      .setHTML('<h3>' + origin.streetNumber + ' ' + origin.streetName + '</h3>'))
      .addTo(map);

    nearbyWorkspaces.forEach(workspace => {
        const el = document.createElement('div');
        el.className = 'marker nearby';

      new mapboxgl.Marker(el)
        .setLngLat(workspace.geometry.coordinates)
        .addTo(map)
        .setLngLat(workspace.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setHTML(`<a class="building-link" href=/buildings/${workspace.workspaceId}>` + workspace.streetNumber + ' ' + workspace.streetName + '</a>'))
        .addTo(map);
    });

    var nav = new mapboxgl.NavigationControl({showCompass: false});
    map.addControl(nav, 'top-left');



    // geojson.features.forEach(marker => {

    //   const el = document.createElement('div');
    //   el.className = 'marker';

    //   new mapboxgl.Marker(el)
    //     .setLngLat(marker.geometry.coordinates)
    //     .addTo(map)
    //     .setLngLat(marker.geometry.coordinates)
    //     .setPopup(new mapboxgl.Popup({ offset: 25, closeButton: false })
    //     .setHTML('<h3>' + marker.properties.title + '</h3>'))
    //     .addTo(map);
    // });

});

  return (
    <Wrapper>
      <div id="map"></div>
    </Wrapper>
  )
}

export default Map;
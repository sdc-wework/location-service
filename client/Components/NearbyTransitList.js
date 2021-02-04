import React, {useEffect} from 'react';
import NearbyTransit from './NearbyTransit';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  `

const NearbyTransitList = ({nearbyTransits}) => {

  return (
    <>
      <h3>NEARBY TRANSIT</h3>
      <List>
      { nearbyTransits.map((option, i) => (
          <NearbyTransit key={i} option={option} />
        )) }
      </List>
    </>
  );
}


export default NearbyTransitList;
import React from 'react';
import NearbyTransit from './NearbyTransit';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  `

const NearbyTransitList = ({transitOptions}) => (
  <>
    <h3>NEARBY TRANSIT</h3>
    <List>
    { transitOptions.map((option, i) => (
        <NearbyTransit key={i} name={option} />
      )) }
    </List>
  </>
);

export default NearbyTransitList;
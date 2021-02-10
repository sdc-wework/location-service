import React, {useEffect} from 'react';
import NearbyTransit from './NearbyTransit';
import styled from 'styled-components';
import { faTrain, faBus, faBicycle, faRoad} from '@fortawesome/free-solid-svg-icons'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  `

const Wrapper = styled.div`
  .transit-title {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-size: 16px;
  }
`

const NearbyTransitList = ({nearbyTransits}) => {

  const types = {
    Metro: faTrain,
    Bus: faBus,
    'bike path': faBicycle,
    freeway: faRoad
  }

  return (
    <>
      <Wrapper>
        <p className="transit-title">NEARBY TRANSIT</p>
      </Wrapper>
      <List>
      { nearbyTransits.map((option) => (
          <NearbyTransit key={nearbyTransits.id} option={option} type={types[option.type]}/>
        )) }
      </List>
    </>
  );
}


export default NearbyTransitList;
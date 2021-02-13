import React from 'react';
import NearbyTransit from '../NearbyTransit';
import { faTrain, faBus, faBicycle, faRoad} from '@fortawesome/free-solid-svg-icons';
import { Wrapper, List } from './styles'

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
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Item = styled.li`
  margin-bottom: 1rem;
  font-size: 16px;
  display: flex;
`

const Image = styled.div`
margin-right: 1.25rem;
`

const NearbyTransit = ({name}) => (
  <Item>
    <Image>
      <FontAwesomeIcon icon={faCoffee} />
    </Image>
    {name}
  </Item>
);

export default NearbyTransit;



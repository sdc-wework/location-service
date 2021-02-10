import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = styled.li`
  margin-bottom: 1rem;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
`

const Image = styled.div`
  width: 36px;
  height: 36px;
`

const Description = styled.div`
  margin-left: 1.25rem;
`

const NearbyTransit = ({option, type}) => (
  <Item>
    <Image>
      <FontAwesomeIcon icon={type} size="lg"/>
    </Image>
    <Description>
      {option.name} {option.type}
    </Description>
  </Item>
);

export default NearbyTransit;



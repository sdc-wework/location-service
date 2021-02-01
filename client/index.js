import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Button = styled.button`
  background-color: blue;
  border-radius: 4px;
  color: #FFF;
  height: 50px;
  width: 100px;
`

const App = () => (
  <Button>Hello World!</Button>
)

const root = document.getElementById('location-service');
ReactDOM.render(<App />, root);

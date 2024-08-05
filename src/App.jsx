import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2rem;
  background-color: lightblue;
  color: darkblue;
  padding: 1rem;
`;

const Button = styled.button`
  background-color: black;
  color: orange;
  cursor: pointer;
  padding: 1.2rem 1.5rem;
  border-radius: 5px;
  margin-right: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: black;
    background-color: orange;
  }
`;

const Input = styled.input`
  border: none;
  width: 250px;
  padding: 1.2rem 2rem;
  border-radius: 5px;
  background-color: whitesmoke;

  &:focus {
    border: 1px solid gray;
  }
`;

const StyledApp = styled.main`
  background-color: green;
  height: 100vh;
  padding: 2rem;
`;

const App = () => {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert('Check out')}>Check out</Button>
      <Button onClick={() => alert('Check In')}>Check in</Button>
      <Input type="number" placeholder="enter your age"></Input>
    </StyledApp>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';
import Button from './ui/Button';
import GlobalStyles from './styles/GlobalStyles';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Button onClick={() => alert('Check out')}>Check out</Button>
        <Heading as="h2">Test H2</Heading>

        <Button onClick={() => alert('Check In')}>Check in</Button>
        <Input type="number" placeholder="enter your age"></Input>

        <Heading as="h3"> Test H3</Heading>
      </StyledApp>
    </>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';

import { useEmail } from 'react-mailkit';
import { email } from './email';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div`
  width: 350px;
  height: 70px;
  background-size: contain;
  background-image: url('./assets/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 30px;
`;

const App = () => {
  const { html } = useEmail(email, {
    validationLevel: 'soft'
  });

  return (
    <Container>
      <Logo />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
};

export default App;

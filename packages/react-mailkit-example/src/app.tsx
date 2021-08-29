import React from 'react';
import { useEmail } from 'react-mailkit';
import { email } from './email';

const App = () => {
  const { html } = useEmail(email, {
    validationLevel: 'soft'
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default App;

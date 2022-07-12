import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
    </ChakraProvider>
  );
}

export default App;

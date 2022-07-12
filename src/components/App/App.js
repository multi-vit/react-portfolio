import React from 'react';
import { ChakraProvider, theme, VStack } from '@chakra-ui/react';
import ProjectPage from '../ProjectPage/ProjectPage.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProjectPage />
    </ChakraProvider>
  );
}

export default App;

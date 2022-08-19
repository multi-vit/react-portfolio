import React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import TechStackItem from '../TechStackItem/TechStackItem.js';
import currentlyLearning from '../../libs/currentlyLearning.js';

export default function CurrentlyLearningContainer() {
  return (
    <Container maxW="80rem" centerContent pb={10}>
      <SimpleGrid columns={[2, null, 4]} spacing={2}>
        {currentlyLearning.map(stack => {
          return (
            <TechStackItem text={stack.text} src={stack.src} alt={stack.alt} />
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

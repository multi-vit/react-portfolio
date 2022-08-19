import React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import TechStackItem from '../TechStackItem/TechStackItem.js';
import techStack from '../../libs/techStackData.js';

export default function TechStackContainer() {
  return (
    <Container maxW="80rem" centerContent>
      <SimpleGrid columns={[3, null, 5]} spacing="5">
        {techStack.map(stack => {
          return (
            <TechStackItem text={stack.text} src={stack.src} alt={stack.alt} />
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

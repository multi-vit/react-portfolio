import React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectContainer() {
  return (
    <Container maxW="80rem" centerContent>
      <SimpleGrid columns={[1, 2, 1, 2]}>
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>
    </Container>
  );
}

import React from 'react';
import { SimpleGrid, Container } from '@chakra-ui/react';
import ProjectCard from '../ProjectCard/ProjectCard';
import projects from '../../libs/projectData.js';

export default function ProjectContainer() {
  return (
    <Container maxW="80rem" centerContent>
      <SimpleGrid columns={[1, 2, 1, 2]} spacing="5">
        {projects.map(project => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              src={project.src}
              alt={project.alt}
              github={project.github}
              techStack={project.techStack}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
}

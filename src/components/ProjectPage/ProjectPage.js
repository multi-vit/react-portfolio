import { VStack } from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar.js';
import ProjectContainer from '../ProjectContainer/ProjectContainer.js';

export default function ProjectPage() {
  return (
    <VStack spacing={100}>
      <NavBar />
      <ProjectContainer />
    </VStack>
  );
}

import {
  VStack,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
  Box,
  Flex,
  Image,
} from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar.js';
import PictureOfMe from './me.jpeg';

export default function AboutPage() {
  return (
    <VStack spacing={100}>
      <NavBar />
      <Flex align="center">
        <Image
          src={PictureOfMe}
          alt="Me playing the sousaphone"
          borderRadius="full"
          boxSize="100px"
          objectFit="cover"
        />
        <Accordion allowToggle align-items="">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Hi, my name is Andy and I used to be a professional musician,
                  so I've traded 1 keyboard and strange language for another!
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Being a professional musician means I bring skills like teamwork,
              problem solving and continual improvement through having to
              practise my instruments. <br />I also previously taught
              instrumental lessons so have good communication and articulate
              problems and knowledge.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </VStack>
  );
}

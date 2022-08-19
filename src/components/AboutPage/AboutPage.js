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
  Heading,
  Text,
} from '@chakra-ui/react';
import NavBar from '../NavBar/NavBar.js';
import TechStackContainer from '../TechStackContainer/TechStackContainer.js';
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
            <h1>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Hi, my name is Andy and before the School of Code, I used to
                  be a professional musician. So I've traded 1 keyboard for
                  another and am looking forward to orchestrating some code!
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              Being a professional musician means I bring skills like
              communication, teamwork and problem solving along with possessing
              self-discipline and a passion for continual improvement from
              practising my instruments.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
      <VStack spacing={8}>
        <Heading textAlign="center">School of Code</Heading>
        <Box maxW="90vw">
          <Text>
            Chosen from over 3000 applicants to attend a 16-week intense, full
            stack development bootcamp. Worked in pairs and teams to learn full
            stack tools and build applications. During project month, our team
            of 6 created a full stack application to help users eat more
            seasonally. We built this project using Next.js, Node.js, Express.js
            and PostgreSQL, with full deployment on Netlify for the front end
            and Heroku for the back end. Most notably, we built our own custom
            API for the project and populated it with a data file that was over
            1500 lines long, as well as accessing a third-party service. We pair
            and mob programmed across our whole project and everyone worked on
            all aspects of the app. We managed our project using Scrum, Kanban,
            and daily stand ups and retrospectives and used GitHub flow for
            version control. We tested using Axe, Cypress, React Testing
            Library, Jest and Supertest. We completed 2 iterations (our MVP and
            one stretch goal) within the month, before showcasing our
            application virtually to other developers and industry
            professionals. We have continued to iteratively improve upon the
            project since. I took a lead on testing our app with unit,
            integration and an end-to-end test, during which I learnt a lot
            about mocking in Jest. I also learnt a lot from my team,
            particularly improving my CSS skills
          </Text>
        </Box>
        <Heading>Tech Skills</Heading>
        <TechStackContainer />
      </VStack>
    </VStack>
  );
}

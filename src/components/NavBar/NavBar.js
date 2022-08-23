import { useState } from 'react';
import { Flex, Button, IconButton, Spacer, Heading } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColourModeSwitcher } from '../ColourModeSwitcher/ColourModeSwitcher';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

//TODO sort mobile dropdown (outline the div so you can see what you're working with)
export default function NavBar() {
  const [display, changeDisplay] = useState('none');
  return (
    <Flex w="100vw" position="sticky" zIndex={2}>
      <Flex align="center" w="100vw" position="sticky">
        {/* Desktop */}
        <Flex display={['none', 'none', 'flex', 'flex']}>
          {/* Wrap each button inside this code, with the relevant href path when you've set up React Router
          <Link href="/" passHref>
          </Link>*/}
          <Link to="/">
            <Button as="a" variant="ghost" aria-label="About Me" my={5}>
              About Me
            </Button>
          </Link>
          <Link to="/projects">
            <Button as="a" variant="ghost" aria-label="Projects" my={5}>
              Projects
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <ColourModeSwitcher justify-self="flex-end" />
        <Spacer />
        <Heading as="h1" size="lg">
          Andy Johnson
        </Heading>
        <Spacer />
        <Button
          as="a"
          target="_blank"
          href="https://github.com/multi-vit"
          leftIcon={<FaGithub />}
          variant="ghost"
          aria-label="GitHub"
          my={5}
        >
          GitHub <ExternalLinkIcon mx="2px" />
        </Button>
        <Button
          as="a"
          target="_blank"
          href="https://www.linkedin.com/in/mult-vit/"
          colorScheme="linkedin"
          leftIcon={<FaLinkedin />}
          variant="ghost"
          aria-label="LinkedIn"
          my={5}
        >
          LinkedIn <ExternalLinkIcon mx="2px" />
        </Button>
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        zIndex={20}
        pos="sticky"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          {/* Wrap each button inside this code, with the relevant href path when you've set up React Router
          <Link href="/" passHref>
          </Link>*/}
          <Link to="/">
            <Button as="a" variant="outline" aria-label="About Me" my={5}>
              About Me
            </Button>
          </Link>
          <Link to="/projects">
            <Button as="a" variant="outline" aria-label="Projects" my={5}>
              Projects
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

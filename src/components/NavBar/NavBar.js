import { useState } from 'react';
import { useColorMode, Flex, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColourModeSwitcher } from '../ColourModeSwitcher/ColourModeSwitcher';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [display, changeDisplay] = useState('none');
  return (
    <Flex>
      <Flex position="fixed" top="1rem" left="1rem" align="center" w="100%">
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
          <Button as="a" variant="ghost" aria-label="CV" my={5}>
            CV
          </Button>
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
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        zIndex={20}
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        backgroundColor={'#ffffff'}
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
          <Link to="/cv">
            <Button as="a" variant="outline" aria-label="CV" my={5} w="100%">
              CV
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { useState } from 'react';
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default NavBar() {
    const [display, changeDisplay] = useState('none')
    return (
        <Flex>
<Flex position="fixed" top="1rem" right="1rem" align="center">
  {/* Desktop */}
  <Flex>
    <NextLink href="/" passHref>
      <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
        Home
      </Button>
    </NextLink>

    <NextLink href="/about" passHref>
      <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
        About
      </Button>
    </NextLink>

    <NextLink href="/contact" passHref>
      <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
        Contact
      </Button>
    </NextLink>
  </Flex>

  {/* Mobile */}
  <IconButton
    aria-label="Open Menu"
    size="lg"
    mr={2}
    icon={<HamburgerIcon />}
    onClick={}
  />
  <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
</Flex>
{/* Mobile Content */}
<Flex
  bgColor="gray.50"
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
      onClick={}
    />
  </Flex>

  <Flex flexDir="column" align="center">
    <NextLink href="/" passHref>
      <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
        Home
      </Button>
    </NextLink>

    <NextLink href="/about" passHref>
      <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
        About
      </Button>
    </NextLink>

    <NextLink href="/contact" passHref>
      <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
        Contact
      </Button>
    </NextLink>
  </Flex>
</Flex>
</Flex>
        )
}
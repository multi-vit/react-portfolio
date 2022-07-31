import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function ProjectCard({
  title,
  description,
  src,
  alt,
  github,
  techStack,
}) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        h={'450px'}
        maxW={'500px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${[src]})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={500}
            objectFit={'contain'}
            src={src}
            alt={alt}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Link
            href={github}
            isExternal
            color={'gray.500'}
            fontSize={'sm'}
            textTransform={'uppercase'}
          >
            Github <ExternalLinkIcon mx="2px" />
          </Link>
          <Stack direction={'row'} align={'center'}>
            <Text fontSize={'md'}>{description}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

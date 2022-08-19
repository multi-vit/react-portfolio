import { Box, Image, Text } from '@chakra-ui/react';

export default function TechStackItem({ text, src, alt }) {
  return (
    <Box>
      <Text textAlign="center">{text}</Text>
      <Image boxSize="50px" objectFit="cover" src={src} alt={alt} />
    </Box>
  );
}

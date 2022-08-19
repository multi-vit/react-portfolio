import { Box, Image, Text } from '@chakra-ui/react';

export default function TechStackItem({ text, src, alt }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="2px solid #A7CECB"
      borderRadius="4px"
    >
      <Text textAlign="center">{text}</Text>
      <Image boxSize="50px" objectFit="contain" src={src} alt={alt} />
    </Box>
  );
}

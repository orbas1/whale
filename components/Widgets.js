import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Widgets = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box p={4} bg="white" borderWidth="1px" borderRadius="md">
        <Heading size="md" mb={2}>Hello</Heading>
        <Text>Welcome to the dashboard.</Text>
      </Box>
      <Box p={4} bg="white" borderWidth="1px" borderRadius="md">
        <Heading size="md" mb={2}>Another Widget</Heading>
        <Text>More content goes here.</Text>
      </Box>
    </VStack>
  );
};

export default Widgets;

import { Box, VStack, Link, Text } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <Box w="64" bg="white" borderRightWidth="1px" borderColor="blue.100" p={4} color="blue.800">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>Whale</Text>
      <VStack align="stretch" spacing={4}>
        <Link href="#">Dashboard</Link>
        <Link href="#">Widgets</Link>
        <Link href="#">Settings</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;

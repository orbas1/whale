import { useEffect, useState } from 'react';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';

const Feed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/feed')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <Box>
      <Heading size="md" mb={4}>Live Feed</Heading>
      <VStack align="stretch" spacing={3}>
        {items.map(item => (
          <Box key={item.id} p={3} bg="white" borderWidth="1px" borderRadius="md">
            <Text fontWeight="bold">{item.title}</Text>
            <Text fontSize="sm" color="gray.600">{item.content}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Feed;

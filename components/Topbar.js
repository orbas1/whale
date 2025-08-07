import { useState } from 'react';
import { Flex, InputGroup, InputLeftElement, Input, Button, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Topbar = () => {
  const [user, setUser] = useState({ name: 'Demo User' });

  return (
    <Flex bg="blue.500" color="white" p={4} align="center">
      <InputGroup maxW="400px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input bg="white" color="black" placeholder="Search..." />
      </InputGroup>
      <Flex ml="auto" align="center">
        {user ? (
          <Menu>
            <MenuButton>
              <Avatar size="sm" name={user.name} />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={() => setUser(null)}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            <Button variant="outline" colorScheme="whiteAlpha" mr={2}>Login</Button>
            <Button colorScheme="teal">Register</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Topbar;

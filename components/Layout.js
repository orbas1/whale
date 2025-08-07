import { Flex, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <Flex height="100vh" bg="blue.50">
      <Sidebar />
      <Flex direction="column" flex="1">
        <Topbar />
        <Box flex="1" p={4} overflowY="auto">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;

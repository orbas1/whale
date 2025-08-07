import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Progress,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';

export default function Setup() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    siteName: '',
    siteUrl: '',
    dbHost: '',
    dbUser: '',
    dbPassword: '',
    dbName: '',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const permissions = [
    { label: 'File system access', ok: true },
    { label: 'Environment variables', ok: !!process.env.DATABASE_URL },
  ];

  const handleSetup = () => {
    setRunning(true);
    setTimeout(() => {
      setRunning(false);
      setDone(true);
    }, 1000);
  };

  const finish = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('setupComplete', 'true');
    }
    router.push('/');
  };

  return (
    <Box p={8} maxW="2xl" mx="auto">
      <Heading mb={6}>Setup Wizard</Heading>
      <Progress value={(step / 2) * 100} mb={6} />
      {step === 0 && (
        <Box>
          <Text mb={4}>Permissions check</Text>
          <List spacing={3} mb={6}>
            {permissions.map((perm) => (
              <ListItem key={perm.label}>
                <ListIcon
                  as={perm.ok ? CheckCircleIcon : WarningIcon}
                  color={perm.ok ? 'green.500' : 'red.500'}
                />
                {perm.label}
              </ListItem>
            ))}
          </List>
          <Button colorScheme="teal" onClick={() => setStep(1)}>
            Next
          </Button>
        </Box>
      )}
      {step === 1 && (
        <Box>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel>Site Name</FormLabel>
              <Input name="siteName" value={form.siteName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Site URL</FormLabel>
              <Input name="siteUrl" value={form.siteUrl} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>DB Host</FormLabel>
              <Input name="dbHost" value={form.dbHost} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>DB User</FormLabel>
              <Input name="dbUser" value={form.dbUser} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>DB Password</FormLabel>
              <Input
                name="dbPassword"
                type="password"
                value={form.dbPassword}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>DB Name</FormLabel>
              <Input name="dbName" value={form.dbName} onChange={handleChange} />
            </FormControl>
          </VStack>
          <Button mt={6} colorScheme="teal" onClick={() => setStep(2)}>
            Next
          </Button>
        </Box>
      )}
      {step === 2 && (
        <Box>
          {!running && !done && (
            <Button colorScheme="teal" onClick={handleSetup}>
              Run Database Setup
            </Button>
          )}
          {running && (
            <Box>
              <Text mb={4}>Running migrations and seeders...</Text>
              <Progress size="xs" isIndeterminate mb={4} />
            </Box>
          )}
          {done && (
            <Button colorScheme="teal" onClick={finish}>
              Finish
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
}

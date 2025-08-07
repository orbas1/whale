import Head from 'next/head';
import { SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Widgets from '../components/Widgets';
import Feed from '../components/Feed';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Whale Dashboard</title>
        <meta name="description" content="Chakra UI dashboard with live feed." />
      </Head>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <Widgets />
        <Feed />
      </SimpleGrid>
    </Layout>
  );
}

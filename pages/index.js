import Head from 'next/head';
import { Pool } from 'pg';

export async function getServerSideProps() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    const { rows } = await pool.query('SELECT NOW() AS now');
    return { props: { now: rows[0].now.toString() } };
  } catch (error) {
    console.error('Database connection failed', error);
    return { props: { now: null } };
  } finally {
    await pool.end();
  }
}

export default function Home({ now }) {
  return (
    <>
      <Head>
        <title>Whale</title>
        <meta name="description" content="A simple one-page Next.js site for Vercel deployment." />
      </Head>
      <main>
        <h1>Welcome to Whale</h1>
        <p>A simple one-page Next.js site for Vercel deployment.</p>
        {now && <p>Server time: {now}</p>}
      </main>
    </>
  );
}

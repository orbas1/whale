const { Client } = require('pg');
const data = require('./data.js');

async function seed() {
  const required = ['PGHOST', 'PGPORT', 'PGUSER', 'PGPASSWORD', 'PGDATABASE'];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}`);
  }

  const client = new Client();

  try {
    await client.connect();
    await client.query(`
      CREATE TABLE IF NOT EXISTS whales (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
      );
    `);
    await client.query('TRUNCATE TABLE whales RESTART IDENTITY');
    for (const whale of data) {
      await client.query('INSERT INTO whales (name) VALUES ($1)', [whale.name]);
    }
    console.log('Database seeded successfully');
  } finally {
    await client.end();
  }
}

module.exports = seed;

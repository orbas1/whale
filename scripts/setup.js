require('dotenv').config();
const seed = require('./seed.js');

seed().catch((err) => {
  console.error('Setup failed', err);
  process.exit(1);
});

# Setup

## Prerequisites

- Node.js v18 or later
- PostgreSQL

## Database

1. Install PostgreSQL (for example on Ubuntu:
   `sudo apt-get install postgresql`).
2. Create a database and user:
   ```bash
   sudo -u postgres psql -c "CREATE USER whaleuser WITH PASSWORD 'whalepass';"
   sudo -u postgres psql -c "CREATE DATABASE whaledb OWNER whaleuser;"
   ```
3. Copy `.env.example` to `.env` and adjust the values if needed.

## Seed data

Run the setup script to create the `whales` table and insert sample data:

```bash
npm run setup
```

After seeding, you can start the development server with `npm run dev`.

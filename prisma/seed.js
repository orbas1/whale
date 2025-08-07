const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Demo User',
      email: 'demo@example.com',
      posts: {
        create: [
          { title: 'First post', content: 'Hello world!' },
          { title: 'Another post', content: 'More demo content.' },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
    res.status(200).json(posts);
  } catch (e) {
    res.status(200).json([
      { id: 1, title: 'Welcome', content: 'This is demo content.' },
      { id: 2, title: 'Another item', content: 'More demo data.' },
    ]);
  }
}

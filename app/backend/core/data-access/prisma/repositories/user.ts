import { prisma } from '../client';

export async function getUsers() {
  const resultOrder = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return resultOrder;
}

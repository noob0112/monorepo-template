import { PrismaClient } from '@prisma/client';

console.log({ url: process.env.DATABASE_URL })
export const prisma = new PrismaClient(
//     {
//   datasources: { db: { url: process.env.DATABASE_URL } },
// }
);

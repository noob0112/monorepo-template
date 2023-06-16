import { EventEmitter } from 'events';
import express from 'express';
import { z } from 'zod';
import { getUsers } from '../../data-access/prisma/repositories/user';

export async function startApiServer() {
  // express implementation
  const app = express();

  app.use((req, _res, next) => {
    // request logger
    console.log('⬅️ ', req.method, req.path, req.body ?? req.query);

    next();
  });

  app.get('/', (_req, res) => res.send('hello'));
  app.get('/posts', async (_req, res) => {
    const usersWithPosts = await getUsers()
    res.send(usersWithPosts);
  });
  app.get('/messages', (_req, res) => res.send('db.messages'));
  app.listen(2021, () => {
    console.log('listening on port 2021');
  });
}

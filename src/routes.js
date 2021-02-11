import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/user', async (req, res) => {
  const user = await User.create({
    name: 'Gustavo Bonfim',
    email: 'gustavo@teste.com',
    password_hash: 'alsdfl',
  });

  return res.json(user);
});

routes.get('/', (req, res) => res.json({ message: 'Hello world!' }));

export default routes;

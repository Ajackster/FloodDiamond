import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';

export async function findUser(username: string) {
  return await DBRef.usersCollection.findOne({ username });
}

export async function getUser(userId: string) {
  return await DBRef.usersCollection.findOne({ _id: new mongodb.ObjectId(userId) });
}

export async function handleLogin(req: Request, res: Response) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    res.sendStatus(400);
    return;
  }

  const user = await findUser(username);
  if (!user) {
    res.send('User not found');
    return;
  }

  if (user.password !== password) {
    res.send('Invalid credentials');
    return;
  }

  res.send({ userId: user._id });
}

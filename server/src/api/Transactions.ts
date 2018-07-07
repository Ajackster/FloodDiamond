import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';
import { getUser } from './User';
import { getDiamond } from './Diamonds';
import { getSupplier } from './Supplier';

export async function insertTransacton(userId: string, supplierId: string, diamondId: string) {
  return await DBRef.transactionsCollection.insert({
    userId: new mongodb.ObjectId(userId),
    supplierId: new mongodb.ObjectId(supplierId),
    diamondId: new mongodb.ObjectId(diamondId),
  });
}

export async function handleTransaction(req: Request, res: Response) {
  const userId = req.body.userId;
  const supplierId = req.body.supplierId;
  const diamondId = req.body.diamondId;

  if (!userId || !supplierId || !diamondId) {
    res.send(400);
    return;
  }

  const transaction = await insertTransacton(userId, supplierId, diamondId);
  if (!transaction.result.ok) {
    res.send(500);
    return;
  }

  const user = await getUser(userId);
  const supplier = await getSupplier(supplierId);
  const diamond = await getDiamond(diamondId);

  res.send({
    user,
    supplier,
    diamond,
  });
}

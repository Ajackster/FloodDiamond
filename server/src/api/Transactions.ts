import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';
import { getUser } from './User';
import { getDiamond } from './Diamonds';
import { getSupplier } from './Supplier';
import { insertCertificate } from './Certificates';

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
    res.sendStatus(400);
    return;
  }

  const transaction = await insertTransacton(userId, supplierId, diamondId);
  if (!transaction.result.ok) {
    res.sendStatus(500);
    return;
  }

  const user = await getUser(userId);
  const supplier = await getSupplier(supplierId);
  const diamond = await getDiamond(diamondId);

  if (user === null || supplier === null || diamond === null) {
    res.sendStatus(404);
    return;
  }

  const certificateInfo = {
    transactionId: transaction.insertedId,
    userId: new mongodb.ObjectId(userId),
    name: user.name,
    supplierName: supplier.name,
    supplierLocation: supplier.location,
    diamondName: supplier.name,
  };
  const certificate = await insertCertificate(certificateInfo);
  res.send({ _id: certificate.insertedId, ...certificateInfo });
}

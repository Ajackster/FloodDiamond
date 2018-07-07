import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';

export async function getSuppliers() {
  return await DBRef.suppliersCollection.find({}).toArray();
}

export async function getSupplier(supplierId: string) {
  return await DBRef.suppliersCollection.findOne({ _id: new mongodb.ObjectId(supplierId) });
}

export async function handleSuppliers(req: Request, res: Response) {
  const suppliers = await getSuppliers();
  res.send(suppliers);
}

export async function handleSupplier(req: Request, res: Response) {
  const supplierId = req.body.id;
  if (!supplierId) {
    res.send(400);
    return;
  }

  const supplier = await getSupplier(supplierId);
  if (!supplier) {
    res.send(404);
    return;
  }

  res.send(supplier);
}

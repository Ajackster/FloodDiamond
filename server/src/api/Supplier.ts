import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';

export async function GetSuppliers(req: Request, res: Response) {
  const suppliers = await DBRef.supplierCollection.find({}).toArray();
  res.send(suppliers);
}

export async function GetSupplier(req: Request, res: Response) {
  const supplierId = req.body.id;
  if (!supplierId) {
    res.send(400);
    return;
  }

  const supplier = await DBRef.supplierCollection.findOne({ _id: new mongodb.ObjectId(supplierId) });
  if (!supplier) {
    res.send(404);
    return;
  }

  res.send(JSON.stringify(supplier));
}

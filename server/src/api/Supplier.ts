import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';

export function GetSuppliers(req: Request, res: Response) {
  DBRef.supplierCollection.find({}).toArray((err, suppliers) => {
    if (err) {
      console.log(err);
      throw err;
    }

    res.send(JSON.stringify(suppliers));
  });
}

export function GetSupplier(req: Request, res: Response) {
  const supplierId = req.body.id;
  if (!supplierId) {
    res.send(400);
    return;
  }

  DBRef.supplierCollection.findOne({ _id: new mongodb.ObjectId(supplierId) }, (err, supplier) => {
    if (err) {
      console.log(err);
      throw err;
    }
    if (!supplier) {
      res.send(404);
      return;
    }

    res.send(JSON.stringify(supplier));
  });
}

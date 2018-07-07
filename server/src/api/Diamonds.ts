import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';

export async function GetDiamonds(req: Request, res: Response) {
  const dbRes = await DBRef.diamondCollection.find({}).toArray();
  res.send(JSON.stringify(dbRes));
}

export async function GetDiamond(req: Request, res: Response) {
  const diamondId = req.body.id;
  if (!diamondId) {
    res.send(400);
    return;
  }

  const diamond = await DBRef.diamondCollection.findOne({ _id: new mongodb.ObjectId(diamondId) });
  if (!diamond) {
    res.send(404);
    return;
  }

  res.send(JSON.stringify(diamond));
}

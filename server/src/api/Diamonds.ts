import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';

export async function getDiamonds() {
  return await DBRef.diamondsCollection.find({}).toArray();
}

export async function getDiamond(diamondId: string) {
  return await DBRef.diamondsCollection.findOne({ _id: new mongodb.ObjectId(diamondId) });
}

export async function handleGetDiamonds(req: Request, res: Response) {
  const diamonds = await getDiamonds();
  res.send(diamonds);
}

export async function handleGetDiamond(req: Request, res: Response) {
  const diamondId = req.body.id;
  if (!diamondId) {
    res.send(400);
    return;
  }

  const diamond = await getDiamond(diamondId);
  if (!diamond) {
    res.send(404);
    return;
  }
  res.send(diamond);
}

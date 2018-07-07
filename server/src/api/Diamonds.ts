import * as mongodb from 'mongodb';
import { Request, Response } from 'express';
import { DBRef } from '../lib/DBRef';

export function GetDiamonds(req: Request, res: Response) {
  DBRef.diamondCollection.find({}).toArray((err, diamonds) => {
    if (err) {
      console.log(err);
      throw err;
    }

    res.send(JSON.stringify(diamonds));
  });
}

export function GetDiamond(req: Request, res: Response) {
  const diamondId = req.body.id;
  if (!diamondId) {
    res.send(400);
    return;
  }

  DBRef.diamondCollection.findOne({ _id: new mongodb.ObjectId(diamondId) }, (err, diamond) => {
    if (!diamond) {
      res.send(404);
      return;
    }
    res.send(JSON.stringify(diamond));
  });
}

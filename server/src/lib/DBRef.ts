import * as mongodb from 'mongodb';
import { Diamond, Supplier } from './interfaces';

const DB_NAME = 'FloodDiamond';
const DIAMOND_COLLECTION = 'diamonds';
const SUPPLIER_COLLECTION = 'suppliers';

export class DBRef {
  public static db: mongodb.MongoClient;
  public static diamondCollection: mongodb.Collection<Diamond>;
  public static supplierCollection: mongodb.Collection<Supplier>;
}

export function connectToMongo() {
  mongodb.MongoClient.connect(process.env.DB_HOST as any, function(err, db) {
    if (err) throw err;
    DBRef.db = db;
    DBRef.diamondCollection = db.db(DB_NAME).collection(DIAMOND_COLLECTION);
    DBRef.supplierCollection = db.db(DB_NAME).collection(SUPPLIER_COLLECTION);
  });
}

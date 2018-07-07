import * as mongodb from 'mongodb';
import { Diamond, Supplier } from './interfaces';

const DB_NAME = 'FloodDiamond';
const MONGO_URL = 'mongodb://localhost:27017';
const DIAMOND_COLLECTION = 'Diamond';
const SUPPLIER_COLLECTION = 'Supplier';

export class DBRef {
  public static db: mongodb.MongoClient;
  public static diamondCollection: mongodb.Collection<Diamond>;
  public static supplierCollection: mongodb.Collection<Supplier>;
}

export function connectToMongo() {
  mongodb.MongoClient.connect(MONGO_URL, function(err, db) {
    if (err) throw err;
    DBRef.db = db;
    DBRef.diamondCollection = db.db(DB_NAME).collection(DIAMOND_COLLECTION);
    DBRef.supplierCollection = db.db(DB_NAME).collection(SUPPLIER_COLLECTION);
  });
}

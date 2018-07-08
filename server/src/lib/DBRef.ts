import * as mongodb from 'mongodb';
import { Diamond, Supplier, Transaction, User, Receipt } from './interfaces';

const DB_NAME = 'FloodDiamond';
const DIAMOND_COLLECTION = 'diamonds';
const SUPPLIER_COLLECTION = 'suppliers';
const TRANSACTIONS_COLLECTION = 'transactions';
const USERS_COLLECTION = 'users';

export class DBRef {
  public static db: mongodb.MongoClient;
  public static diamondsCollection: mongodb.Collection<Diamond>;
  public static suppliersCollection: mongodb.Collection<Supplier>;
  public static transactionsCollection: mongodb.Collection<Transaction>;
  public static receiptCollecion: mongodb.Collection<Receipt>;
  public static usersCollection: mongodb.Collection<User>;
}

export function connectToMongo() {
  mongodb.MongoClient.connect(process.env.DB_HOST as any, function(err, db) {
    if (err) throw err;
    DBRef.db = db;
    DBRef.diamondsCollection = db.db(DB_NAME).collection(DIAMOND_COLLECTION);
    DBRef.suppliersCollection = db.db(DB_NAME).collection(SUPPLIER_COLLECTION);
    DBRef.transactionsCollection = db.db(DB_NAME).collection(TRANSACTIONS_COLLECTION);
    DBRef.usersCollection = db.db(DB_NAME).collection(USERS_COLLECTION);
  });
}

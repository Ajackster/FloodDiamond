import * as mongodb from 'mongodb';

export interface Diamond {
  _id: mongodb.ObjectId;
  supplierId: mongodb.ObjectId;
  name: string;
  carat: number;
  description: string;
  image: string;
  price: number; // Price is in USD
}

export interface Supplier {
  _id: mongodb.ObjectId;
  location: string;
  image: string;
  name: string;
  description: string;
}

export interface Transaction {
  _id: mongodb.ObjectId;
  diamondId: mongodb.ObjectId;
  supplierId: mongodb.ObjectId;
  userId: mongodb.ObjectId;
}

export interface User {
  _id: mongodb.ObjectId;
  name: string;
  username: string;
  password: string;
}

export interface Receipt {
  _id: mongodb.ObjectId;
  name: string;
  supplierName: string;
  supplierLocation: string;
  diamondName: string;
}

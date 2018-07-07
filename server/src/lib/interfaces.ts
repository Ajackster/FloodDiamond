import * as mongodb from 'mongodb';

export interface Diamond {
  _id: mongodb.ObjectId;
  supplier: mongodb.ObjectId;
  name: string;
  carat: number;
  description: string;
  image: string;
  price: number; // Price is in USD
}

export interface Supplier {
  _id: mongodb.ObjectId;
  managerId: mongodb.ObjectId;
  location: string;
  image: string;
}

export interface Manager {
  _id: mongodb.ObjectId;
  name: string;
  password: string;
}

export interface Diamond {
  _id: string;
  supplierId: string;
  name: string;
  carat: number;
  description: string;
  image: string;
  price: number; // Price is in USD
}

export interface Supplier {
  _id: string;
  location: string;
  image: string;
  name: string;
  description: string;
}

export interface Transaction {
  _id: string;
  diamondId: string;
  supplierId: string;
  userId: string;
}

export interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
}

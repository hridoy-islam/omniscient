export interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
  email: string;
  role: string;
}

export interface UserData {
  personal_information: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    photo: string;
  };
  contact_information: {
    address: string;
    city: string;
    country: string;
    state: string;
    zipcode: string;
  };
  billing_information: {
    address: string;
    city: string;
    country: string;
    state: string;
    zipcode: string;
  };
  wallets: [
    {
      exchange: string;
      wallet: string;
      account: string;
      _id: string;
    }
  ];
  _id: string;
  currency: string;
  primary_account: string;
  email: string;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export // Define the Product type
interface Product {
  _id: string;
  title: string;
  powerdby: string;
  price: number;
  motherboard: string;
  processor: string;
  ram: string;
  smps: string;
  graphicscard: string;
  photo: string; // You can update this type as needed
}

// interfaces.ts

export interface Order {
  _id: string;
  productid: {
    _id: string;
    title: string;
    price: number;
    powerdby: string;
    motherboard: string;
    processor: string;
    ram: string;
    smps: string;
    graphicscard: string;
    photo: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  userid: UserData;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Wallet {
  _id: string;
  name: string;
}


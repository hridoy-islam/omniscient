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
  _id: string;
  email: string;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

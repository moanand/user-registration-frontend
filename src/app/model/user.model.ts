import { Address } from "./address.model";

export class User {
  uid!: number;
  username!: string;
  title!: string;
  firstName!: string;
  lastName!: string;
  birthDate!: Date;
  email!: string;
  phone!: number;
  address!: Address;
  password!: string;
  isTncAccepted!: boolean;

  constructor() {}
}

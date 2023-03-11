export interface User {
  names: string;
  firstLastname: string;
  secondLastname: string;
  cedula: number;
  age: number;
  gender: Gender;
  address: string[];
  phone: number;
  email: string;
  status: string;
  anyKids: boolean;
  dateOfBirth: string;
}

export interface UserPreview {
  id: string;
  completeName: string;
  email: string;
  gender: Gender;
}

type Gender = "m" | "f";

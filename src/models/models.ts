export interface User {
  id?: string | number;
  names: string;
  firstLastname: string;
  secondLastname: string;
  cedula: number | string;
  age: number | string;
  gender: Gender;
  address: string[];
  phone: number | string;
  email: string;
  status: string;
  anyKids: string;
  dateOfBirth: string;
}

export interface UserPreview {
  id?: string | number;
  completeName: string;
  email: string;
  gender: Gender;
}

type Gender = "m" | "f";

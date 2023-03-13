export interface User {
  id?: string | number;
  names: string;
  firstLastname: string;
  secondLastname: string;
  cedula: number | undefined;
  age: number | undefined;
  gender: Gender;
  address: string[];
  phone: number | undefined;
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

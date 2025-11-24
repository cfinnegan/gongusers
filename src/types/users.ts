export interface User {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
}

export interface Secrets {
  [key: string]: number;
}

export interface User {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  password: string;
  managerId?: number | null;
}

export interface Secrets {
  [key: string]: number;
}

export type UserNode = User & {
  reports: UserNode[];
  // This property is not required in order to build the tree but it is useful for the UI -
  // it allows us to highlight users with missing managers
  managerStatus: 'valid' | 'missing' | 'unchecked';
};

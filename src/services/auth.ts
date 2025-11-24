import type { Secrets, User } from '../types/users';

export const lookupUser = (secret: string, users: User[], secrets: Secrets) => {
  const userId = secrets[secret];
  const user = users.find((user) => user.id === userId);
  return user;
};

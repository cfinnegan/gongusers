import type { Secrets, User } from '../types/users';

export const lookupUser = (secret: string, users: User[], secrets: Secrets) => {
  const userId = secrets[secret];
  console.log('\nuserId', userId);
  console.log('\nsecrets', secrets);
  console.log('\nusers', users);
  const user = users.find((user) => user.id === userId);
  return user;
};

export const persistUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getLoggedInUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

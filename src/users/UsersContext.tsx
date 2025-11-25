import { createContext, useContext, useEffect, useState } from 'react';
import type { Secrets, User } from '../types/users';

// TODO: move to a config file
const firebaseUrl = 'https://gongfetest.firebaseio.com/.json';

const UsersContext = createContext<{
  users: User[];
  secrets: Secrets;
  lookupUser: (
    secret: string,
    users: User[],
    secrets: Secrets
  ) => User | undefined;
}>({ users: [], secrets: {}, lookupUser: () => undefined });

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [secrets, setSecrets] = useState<Secrets>({});

  const fetchData = async () => {
    const response = await fetch(firebaseUrl);
    const data = await response.json();
    setUsers(data.users);
    setSecrets(data.secrets);
  };

  const lookupUser = (secret: string, users: User[], secrets: Secrets) => {
    const userId = secrets[secret];
    const user = users.find((user) => user.id === userId);
    return user;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UsersContext.Provider value={{ users, secrets, lookupUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
